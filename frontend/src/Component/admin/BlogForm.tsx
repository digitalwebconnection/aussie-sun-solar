import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Pencil, PlusCircle, X, AlertCircle, FileText, BookOpen, Tag } from 'lucide-react';
import { apiUrl } from '../../lib/api';
import RichTextEditor from './RichTextEditor';

/* ── Blog type (matches MongoDB model) ──────────────────── */
export interface Blog {
  _id?: string;
  slug?: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    longContent?: string;
    schema?: string;
  };
}

interface Props {
  blog?: Blog | null;
  onSuccess: (blog: Blog, isEdit: boolean) => void;
  onClose: () => void;
}

const EMPTY: Blog = {
  title: '', excerpt: '', categories: '', readTime: '',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  image: '',
  content: '',
  meta: { title: '', description: '', keywords: '', canonical: '', longContent: '', schema: '' }
};

/** Mirror the backend slugify logic so the preview is accurate */
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

/* ── Tiny style helpers ────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 1000,
    background: 'rgba(0,0,0,0.45)',
    overflowY: 'auto',
    backdropFilter: 'blur(4px)',
    overscrollBehavior: 'contain',
  },
  modalWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    padding: '3rem 1rem',
  },
  modal: {
    background: '#ffffff',
    borderRadius: '16px',
    width: '100%', maxWidth: '780px',
    boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    padding: '1.25rem 1.75rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  headerTitle: { color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0 },
  closeBtn: {
    background: 'rgba(255,255,255,0.25)', border: 'none',
    borderRadius: '8px', width: 32, height: 32, cursor: 'pointer',
    color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s ease',
  },
  body: { padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: '#f8f9fb' },
  section: {
    border: '1px solid #e2e8f0', borderRadius: '10px',
    padding: '1.5rem 1.25rem',
    background: '#ffffff',
  },
  tabsContainer: {
    display: 'flex',
    gap: '0.5rem',
    borderBottom: '1px solid #e2e8f0',
    marginBottom: '1.25rem',
    paddingBottom: '0.75rem',
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.55rem 0.95rem',
    background: 'none', border: 'none',
    fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
    color: '#64748b', transition: 'all 0.18s ease-in-out',
    borderRadius: '8px',
  },
  activeTab: {
    color: '#FC763A',
    background: 'rgba(252, 118, 58, 0.08)',
  },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid1: { display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' },
  label: {
    display: 'block', fontSize: '0.8rem', fontWeight: 600,
    color: '#475569', marginBottom: '0.4rem',
  },
  input: {
    width: '100%', padding: '0.65rem 0.85rem',
    border: '1px solid #cbd5e1', borderRadius: '8px',
    fontSize: '0.9rem', color: '#1e293b',
    outline: 'none', boxSizing: 'border-box',
    background: '#ffffff', transition: 'all 0.18s ease-in-out',
  },
  textarea: {
    width: '100%', padding: '0.65rem 0.85rem',
    border: '1px solid #cbd5e1', borderRadius: '8px',
    fontSize: '0.9rem', color: '#1e293b',
    outline: 'none', boxSizing: 'border-box',
    background: '#ffffff', resize: 'vertical', minHeight: '80px',
    fontFamily: 'inherit', transition: 'all 0.18s ease-in-out',
  },
  imgPreview: {
    marginTop: '0.6rem', width: '100%', maxHeight: '150px',
    objectFit: 'cover', borderRadius: '6px', border: '1px solid #e2e8f0',
  },
  footer: {
    padding: '1rem 1.75rem', borderTop: '1px solid #e2e8f0',
    display: 'flex', justifyContent: 'flex-end', gap: '0.75rem',
    background: '#ffffff',
  },
  cancelBtn: {
    padding: '0.55rem 1.25rem', border: '1px solid #cbd5e1',
    borderRadius: '8px', background: '#ffffff', cursor: 'pointer',
    fontSize: '0.85rem', color: '#475569', fontWeight: 600,
  },
  saveBtn: {
    padding: '0.55rem 1.5rem',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    border: 'none', borderRadius: '8px', cursor: 'pointer',
    fontSize: '0.85rem', color: '#fff', fontWeight: 700,
    boxShadow: '0 3px 10px rgba(252,118,58,0.35)',
  },
  errBanner: {
    background: '#fff5f5', border: '1px solid #fca5a5',
    borderRadius: '8px', padding: '0.65rem 1rem',
    color: '#dc2626', fontSize: '0.85rem',
    display: 'flex', alignItems: 'center', gap: '0.55rem',
  },
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={S.label}>{label}</label>
      {children}
    </div>
  );
}

function TextInput({ id, value, onChange, placeholder = '' }: {
  id: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={S.input}
      className="form-input"
      onFocus={e => (e.currentTarget.style.borderColor = '#FC763A')}
      onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
    />
  );
}

function TextArea({ id, value, onChange, placeholder = '', rows = 3 }: {
  id: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <textarea
      id={id}
      value={value}
      rows={rows}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={S.textarea}
      className="form-input"
      onFocus={e => (e.currentTarget.style.borderColor = '#FC763A')}
      onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
    />
  );
}

function ImageField({
  label, fieldName, preview, onChange,
}: {
  label: string; fieldName: string; preview: string; onChange: (file: File | null) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label style={S.label}>{label}</label>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        style={{ ...S.input, padding: '0.4rem 0.5rem', cursor: 'pointer' }}
        onChange={e => onChange(e.target.files?.[0] ?? null)}
        id={`img-${fieldName}`}
        className="form-input"
      />
      {preview && (
        <img src={preview} alt={label} style={S.imgPreview} />
      )}
    </div>
  );
}

/* ── Main Component ────────────────────────────────────────── */
export default function BlogForm({ blog, onSuccess, onClose }: Props) {
  const isEdit = !!blog?._id;



  // Lock body scroll so background doesn't scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const [activeTab, setActiveTab] = useState<'info' | 'content' | 'meta'>('info');
  const [form, setForm] = useState<Blog>(blog ? { ...EMPTY, ...blog } : EMPTY);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState(blog?.image || '');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (key: keyof Blog, value: string) =>
    setForm(f => ({ ...f, [key]: value }));

  const setMeta = (key: keyof NonNullable<Blog['meta']>, value: string) =>
    setForm(f => ({ ...f, meta: { ...(f.meta || {}), [key]: value } }));

  const handleFileChange = (
    file: File | null,
    setFile: (f: File | null) => void,
    setPreview: (s: string) => void,
  ) => {
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = e => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const fd = new FormData();

      // Append all scalar fields
      const scalars: (keyof Blog)[] = [
        'title', 'excerpt', 'categories', 'readTime', 'date', 'content',
      ];
      scalars.forEach(k => fd.append(k as string, (form[k] as string) || ''));

      fd.append('meta', JSON.stringify(form.meta || {}));

      // Image files (only if new file selected)
      if (imgFile) fd.append('image', imgFile);

      const url = isEdit ? apiUrl(`/api/blogs/${form._id}`) : apiUrl('/api/blogs');
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, { method, body: fd });
      const data = await res.json();

      if (!res.ok || !data.success) throw new Error(data.message || 'Server error');

      onSuccess(data.data, isEdit);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div style={S.overlay}>
      <div style={S.modalWrapper}>
        <div style={S.modal}>
          {/* Header */}
          <div style={S.header}>
            <h2 style={S.headerTitle}>
              {isEdit ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Pencil size={18} />
                  <span>Edit Blog</span>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <PlusCircle size={18} />
                  <span>Add New Blog</span>
                </div>
              )}
            </h2>
            <button style={S.closeBtn} className="form-close-btn" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={S.body}>
              {error && (
                <div style={S.errBanner}>
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <div style={S.tabsContainer}>
                <button
                  type="button"
                  style={{ ...S.tab, ...(activeTab === 'info' ? S.activeTab : {}) }}
                  className={activeTab === 'info' ? '' : 'form-tab-btn'}
                  onClick={() => setActiveTab('info')}
                >
                  <FileText size={15} />
                  <span>Blog Info</span>
                </button>
                <button
                  type="button"
                  style={{ ...S.tab, ...(activeTab === 'content' ? S.activeTab : {}) }}
                  className={activeTab === 'content' ? '' : 'form-tab-btn'}
                  onClick={() => setActiveTab('content')}
                >
                  <BookOpen size={15} />
                  <span>Content</span>
                </button>
                <button
                  type="button"
                  style={{ ...S.tab, ...(activeTab === 'meta' ? S.activeTab : {}) }}
                  className={activeTab === 'meta' ? '' : 'form-tab-btn'}
                  onClick={() => setActiveTab('meta')}
                >
                  <Tag size={15} />
                  <span>Meta Tags</span>
                </button>
              </div>

              <div style={S.section}>
                {activeTab === 'info' && (
                  <>
                    <div style={S.grid1}>
                      <Field label="Blog Title">
                        <TextInput id="f-title" value={form.title} onChange={v => set('title', v)} placeholder="e.g. Solar Trends 2024" />
                      </Field>
                      {/* Slug preview */}
                      <div>
                        <label style={S.label}>URL Slug <span style={{ color: '#64748b', fontWeight: 400 }}>(auto-generated from title)</span></label>
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: '0.4rem',
                          background: '#f8f9fb', border: '1px solid #e2e8f0',
                          borderRadius: '7px', padding: '0.6rem 0.75rem',
                        }}>
                          <span style={{ color: '#94a3b8', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>/Knowledge/</span>
                          <span style={{ color: '#FC763A', fontSize: '0.9rem', fontWeight: 600, wordBreak: 'break-all' }}>
                            {form.title ? slugify(form.title) : <span style={{ color: '#cbd5e1' }}>your-blog-title</span>}
                          </span>
                        </div>
                        {form._id && form.slug && (
                          <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
                            Current saved slug: <strong style={{ color: '#1e293b' }}>{form.slug}</strong>
                          </p>
                        )}
                      </div>
                    </div>
                    <div style={{ ...S.grid2, marginTop: '1rem' }}>
                      <Field label="Category / Categories">
                        <TextInput id="f-categories" value={form.categories} onChange={v => set('categories', v)} placeholder="e.g. Policy, Sustainability" />
                      </Field>
                      <Field label="Read Time">
                        <TextInput id="f-readtime" value={form.readTime} onChange={v => set('readTime', v)} placeholder="e.g. 5 min read" />
                      </Field>
                    </div>
                    <div style={{ ...S.grid1, marginTop: '1rem' }}>
                      <Field label="Date">
                        <TextInput id="f-date" value={form.date} onChange={v => set('date', v)} placeholder="e.g. Mar 24, 2024" />
                      </Field>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <Field label="Excerpt">
                        <TextArea id="f-excerpt" value={form.excerpt} onChange={v => set('excerpt', v)} placeholder="Short summary for the card..." rows={2} />
                      </Field>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <ImageField
                        label="Feature Image"
                        fieldName="image"
                        preview={imgPreview}
                        onChange={f => handleFileChange(f, setImgFile, setImgPreview)}
                      />
                    </div>
                  </>
                )}

                {activeTab === 'content' && (
                  <>
                    <Field label="Blog Content">
                      <div style={{ background: '#fff', borderRadius: '7px', overflow: 'hidden' }}>
                        <RichTextEditor
                          value={form.content}
                          onChange={v => set('content', v)}
                          placeholder="Write your blog post content here..."
                        />
                      </div>
                    </Field>
                  </>
                )}

                {activeTab === 'meta' && (
                  <>
                    <div style={S.grid2}>
                      <Field label="Meta Title">
                        <TextInput id="m-title" value={form.meta?.title || ''} onChange={v => setMeta('title', v)} placeholder="SEO Title" />
                      </Field>
                      <Field label="Canonical URL">
                        <TextInput id="m-canonical" value={form.meta?.canonical || ''} onChange={v => setMeta('canonical', v)} placeholder="https://example.com/blog/url" />
                      </Field>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <Field label="Keywords">
                        <TextInput id="m-keywords" value={form.meta?.keywords || ''} onChange={v => setMeta('keywords', v)} placeholder="Comma-separated keywords" />
                      </Field>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <Field label="Meta Description">
                        <TextArea id="m-desc" value={form.meta?.description || ''} onChange={v => setMeta('description', v)} placeholder="Short SEO description..." />
                      </Field>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <Field label="Schema (JSON-LD)">
                        <TextArea id="m-schema" value={form.meta?.schema || ''} onChange={v => setMeta('schema', v)} placeholder='{ "@context": "https://schema.org", ... }' />
                      </Field>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <Field label="Long Content (Hidden Text)">
                        <div style={{ background: '#fff', borderRadius: '7px', overflow: 'hidden' }}>
                          <RichTextEditor
                            value={form.meta?.longContent || ''}
                            onChange={v => setMeta('longContent', v)}
                            placeholder="Hidden SEO content..."
                          />
                        </div>
                      </Field>
                    </div>
                  </>
                )}
              </div>

            </div>

            <div style={S.footer}>
              <button type="button" style={S.cancelBtn} className="form-btn-cancel" onClick={onClose}>Cancel</button>
              <button
                type="submit"
                style={{ ...S.saveBtn, opacity: loading ? 0.7 : 1 }}
                className="form-btn-save"
                disabled={loading}
              >
                {loading ? 'Saving…' : isEdit ? 'Update Blog' : 'Add Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        .form-input {
          border: 1px solid #cbd5e1 !important;
          transition: all 0.18s ease-in-out !important;
        }
        .form-input:focus {
          border-color: #FC763A !important;
          box-shadow: 0 0 0 3px rgba(252, 118, 58, 0.15) !important;
        }
        .form-close-btn {
          transition: all 0.2s ease-in-out !important;
        }
        .form-close-btn:hover {
          background: rgba(255, 255, 255, 0.35) !important;
          transform: rotate(90deg);
        }
        .form-tab-btn {
          transition: all 0.18s ease-in-out !important;
        }
        .form-tab-btn:hover {
          background: rgba(0, 0, 0, 0.03) !important;
          color: #1e293b !important;
        }
        .form-btn-cancel {
          transition: all 0.18s ease-in-out !important;
        }
        .form-btn-cancel:hover {
          background: #f8fafc !important;
          border-color: #cbd5e1 !important;
        }
        .form-btn-save {
          background: linear-gradient(135deg, #FC763A, #FEC24A) !important;
          color: #ffffff !important;
          transition: all 0.2s ease-in-out !important;
        }
        .form-btn-save:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(252, 118, 58, 0.4) !important;
        }
        .form-btn-save:active {
          transform: translateY(0);
        }
      `}</style>
    </div >,
    document.body
  );
}
