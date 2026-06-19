import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut, PlusCircle, Pencil, Trash2, FolderOpen, AlertCircle, Loader2,
  FileText, PanelLeftClose, PanelLeftOpen, ArrowUp, ArrowDown, Globe
} from 'lucide-react';
import BlogForm from './BlogForm';
import { type Blog } from './Blog';
import { apiUrl, getImageUrl } from '../../lib/api';
import logo from '../../assets/logo.png';

/* ── Palette ──────────────────────────────────────────────── */
const CLR = {
  primary: '#FC763A',
  accent: '#FEC24A',
  sidebarBg: '#F3F5F7',
  sidebarTx: '#475569',
  mainBg: '#F3F5F7',
  cardBg: '#ffffff',
  border: '#E2E5E9',
  textDark: '#1e293b',
  textMuted: '#64748b',
  danger: '#ef4444',
  success: '#10b981',
};

/* ── Styles ───────────#7c6c6c17────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  root: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    display: 'flex',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: CLR.cardBg,
    padding: '1rem',
    gap: '1rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  /* Sidebar */
  sidebar: {
    width: 240, flexShrink: 0,
    background: CLR.sidebarBg,
    display: 'flex', flexDirection: 'column',
    padding: '1rem 0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    border: `1px solid ${CLR.border}`,
    borderRadius: '16px',
  },
  sidebarLogo: {
    display: 'flex', alignItems: 'center', gap: '0.75rem',
    height: '60px',
    padding: '0 1.25rem',
    borderBottom: `1px solid ${CLR.border}`,
    marginBottom: '1rem',
  },
  logoCircle: {
    width: 36, height: 36, borderRadius: '0px',
    background: 'transparent',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  logoText: { color: '#fff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.3px' },
  logoSub: { color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' },
  navItem: {
    display: 'flex', alignItems: 'center', gap: '0.65rem',
    padding: '0.75rem 1.25rem', cursor: 'pointer',
    color: CLR.sidebarTx, fontSize: '0.88rem', fontWeight: 500,
    transition: 'all 0.15s',
    userSelect: 'none',
    borderRadius: '10px',
  },
  navItemActive: {
    color: CLR.primary,
    background: '#ffffff',
    border: `1px solid ${CLR.border}`,
    borderLeft: `4px solid ${CLR.primary}`,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    fontWeight: 700,
    paddingLeft: 'calc(1.25rem - 4px)',
  },
  sidebarSpacer: { flex: 1 },
  logoutBtn: {
    margin: '0.5rem 1rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.55rem',
    padding: '0.65rem 0.9rem',
    background: '#ffffff',
    border: '1px solid rgba(239,68,68,0.4)',
    borderRadius: '8px', cursor: 'pointer',
    color: '#ef4444', fontSize: '0.82rem', fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '0px',
    transition: 'background 0.2s',
  },
  /* Main */
  main: {
    flex: 1,
    display: 'flex', flexDirection: 'column',
    background: CLR.sidebarBg,
    borderRadius: '16px',
    border: `1px solid ${CLR.border}`,
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    overflow: 'hidden',
    minHeight: 0,
  },
  topbar: {
    background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.33)), url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=350&fit=crop&q=80") no-repeat center center / cover`,
    borderRadius: '12px',
    border: `1px solid ${CLR.border}`,
    padding: '2rem 2.25rem',
    minHeight: '150px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    marginBottom: '0.45rem',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  topbarTitle: { fontWeight: 800, fontSize: '1.4rem', color: CLR.textDark },
  topbarSub: { fontSize: '0.88rem', color: CLR.textMuted, marginTop: '0.25rem', fontWeight: 500 },
  addBtn: {
    display: 'flex', alignItems: 'center', gap: '0.45rem',
    padding: '0.6rem 1.25rem',
    background: CLR.primary,
    border: `1px solid ${CLR.primary}`,
    borderRadius: '8px', cursor: 'pointer',
    color: '#ffffff', fontWeight: 700, fontSize: '0.85rem',
    transition: 'all 0.2s ease-in-out',
  },
  content: { flex: 1, padding: '1rem', overflowY: 'auto', overflowX: 'hidden', background: 'transparent', minHeight: 0 },
  /* Stats */
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.45rem', marginBottom: '0.45rem' },
  statCard: {
    background: CLR.cardBg, borderRadius: '12px',
    border: `1px solid ${CLR.border}`,
    padding: '1.25rem 1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  statVal: { fontSize: '1.6rem', fontWeight: 800, color: CLR.textDark, lineHeight: 1.2 },
  statLabel: { fontSize: '0.73rem', color: CLR.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.3rem' },
  statAccent: { width: 4, height: 36, borderRadius: 0, background: 'linear-gradient(180deg,#FC763A,#FEC24A)', marginRight: '0.9rem', flexShrink: 0 },
  /* Table card */
  tableCard: {
    background: CLR.cardBg, borderRadius: '12px',
    border: `1px solid ${CLR.border}`,
    borderTop: `3px solid ${CLR.primary}`,
    boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
    overflow: 'hidden', transition: 'transform 0.15s, box-shadow 0.15s',
  },
  tableHead: { background: '#F1F5F9', borderBottom: `1px solid ${CLR.border}` },
  th: {
    padding: '0.65rem 1rem', textAlign: 'left',
    fontSize: '0.7rem', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.1em', color: CLR.textMuted,
    whiteSpace: 'nowrap' as const,
  },
  td: {
    padding: '0.75rem 1rem', fontSize: '0.85rem',
    color: CLR.textDark, verticalAlign: 'middle',
    borderBottom: `1px solid ${CLR.border}`,
  },
  tdMuted: { color: CLR.textMuted, fontSize: '0.78rem' },
  badge: {
    display: 'inline-block', padding: '0.22rem 0.6rem',
    borderRadius: '99px', fontSize: '0.7rem', fontWeight: 600,
    background: 'rgba(252,118,58,0.1)', color: CLR.primary,
  },
  imgThumb: {
    width: 52, height: 40, objectFit: 'cover',
    borderRadius: '6px', border: `1px solid ${CLR.border}`,
    background: '#f1f5f9',
  },
  imgPlaceholder: {
    width: 52, height: 40, borderRadius: '6px',
    border: `1px dashed ${CLR.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: CLR.border, fontSize: '0.65rem',
  },
  actionBtn: {
    border: 'none', borderRadius: '7px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 30, height: 30,
    transition: 'background 0.15s',
  },
  editBtn: { background: 'rgba(99,102,241,0.1)', color: '#6366f1' },
  deleteBtn: { background: 'rgba(239,68,68,0.1)', color: CLR.danger },
  /* States */
  center: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', flexDirection: 'column', gap: '0.75rem' },
  /* Delete confirm */
  confirmOverlay: {
    position: 'fixed', inset: 0, zIndex: 999,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  confirmBox: {
    background: '#fff', borderRadius: '14px', padding: '1.75rem',
    width: '90%', maxWidth: '360px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
    textAlign: 'center',
  },
  confirmIcon: {
    width: 52, height: 52, borderRadius: '50%',
    background: 'rgba(239,68,68,0.1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 1rem',
  },
  confirmTitle: { fontWeight: 700, fontSize: '1.05rem', color: CLR.textDark, marginBottom: '0.4rem' },
  confirmSub: { color: CLR.textMuted, fontSize: '0.83rem', marginBottom: '1.25rem' },
  confirmRow: { display: 'flex', gap: '0.75rem', justifyContent: 'center' },
  confirmCancel: {
    padding: '0.5rem 1.2rem', border: `1px solid ${CLR.border}`,
    borderRadius: '8px', background: '#fff', cursor: 'pointer',
    fontSize: '0.85rem', color: CLR.textMuted, fontWeight: 600,
  },
  confirmDelete: {
    padding: '0.5rem 1.2rem', border: 'none',
    borderRadius: '8px', background: CLR.danger, cursor: 'pointer',
    fontSize: '0.85rem', color: '#fff', fontWeight: 700,
  },
};

/* ── Component ────────────────────────────────────────────── */
export default function AdminDashboard() {
  const navigate = useNavigate();
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [editItem, setEditItem] = useState<Blog | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [toast, setToast] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'readTime'>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [collapsed, setCollapsed] = useState(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleSort = (column: 'date' | 'readTime') => {
    if (sortBy === column) {
      setSortDirection(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('desc');
    }
  };

  useEffect(() => {
    if (currentPage > 1 && currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [blogs, totalPages, currentPage]);



  /* ── fetch ── */
  const fetchData = async () => {
    setLoading(true);
    setFetchError('');
    try {
      const endpoint = apiUrl('/api/blogs');
      const res = await fetch(endpoint);
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      } else {
        setFetchError(data.message);
      }
    } catch {
      setFetchError('Cannot reach the backend. Make sure the backend server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  /* ── toast helper ── */
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  /* ── logout ── */
  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin', { replace: true });
  };

  /* ── delete ── */
  const confirmDelete = async () => {
    if (!deletingId) return;
    setDeleteLoading(true);
    try {
      const endpoint = apiUrl(`/api/blogs/${deletingId}`);
      const res = await fetch(endpoint, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        // Find the deleted blog to evict its specific detail cache
        const deletedBlog = blogs.find(x => x._id === deletingId);
        if (deletedBlog) {
          localStorage.removeItem(`ts_cache_blog_detail_${deletedBlog.slug}`);
          localStorage.removeItem(`ts_cache_blog_detail_${deletedBlog._id}`);

          // Cleanup clicked_blogs in localStorage
          try {
            const raw = localStorage.getItem("clicked_blogs");
            if (raw) {
              const clicked = JSON.parse(raw);
              if (Array.isArray(clicked)) {
                const updated = clicked.filter((b: any) => b.slug !== deletedBlog.slug && b._id !== deletedBlog._id);
                localStorage.setItem("clicked_blogs", JSON.stringify(updated));
              }
            }
          } catch (e) {
            console.error("Failed to update clicked_blogs upon deletion:", e);
          }

          // Record it as deleted to prevent other views from pulling it from cache
          try {
            const deletedRaw = localStorage.getItem("deleted_blog_slugs");
            const deletedSlugs = deletedRaw ? JSON.parse(deletedRaw) : [];
            const newDeleted = Array.from(new Set([...deletedSlugs, deletedBlog.slug, deletedBlog._id]));
            localStorage.setItem("deleted_blog_slugs", JSON.stringify(newDeleted));
          } catch (e) {
            console.error("Failed to update deleted_blog_slugs upon deletion:", e);
          }
        }
        setBlogs(b => b.filter(x => x._id !== deletingId));
        localStorage.removeItem('ts_cache_blogs_list');
        showToast(`Blog deleted successfully`);
      } else {
        alert(data.message || 'Delete failed');
      }
    } catch {
      alert('Failed to delete. Check backend connection.');
    } finally {
      setDeleteLoading(false);
      setDeletingId(null);
    }
  };

  /* ── form success ── */
  const handleFormSuccess = (item: any, isEdit: boolean) => {
    const blog = item as Blog;
    if (isEdit) {
      setBlogs(b => b.map(x => x._id === blog._id ? blog : x));
    } else {
      setBlogs(b => [blog, ...b]);
    }
    localStorage.removeItem('ts_cache_blogs_list');
    localStorage.removeItem(`ts_cache_blog_detail_${blog.slug}`);
    localStorage.removeItem(`ts_cache_blog_detail_${blog._id}`);
    setShowForm(false);
    setEditItem(null);
    showToast(isEdit ? `Blog updated!` : `Blog added!`);
  };

  // Sort blogs by date or read time
  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    } else {
      const getMin = (str: string | undefined): number => {
        if (!str) return 0;
        const match = str.match(/(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
      };
      const minA = getMin(a.readTime);
      const minB = getMin(b.readTime);
      return sortDirection === 'asc' ? minA - minB : minB - minA;
    }
  });

  const currentBlogs = sortedBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  /* ── Derived stats ── */
  const stats = [
    { label: 'Total Blogs', value: blogs.length, bg: CLR.cardBg, icon: FileText, color: '#FC763A' },
    { label: 'Total Categories', value: [...new Set(blogs.map(b => b.categories).filter(Boolean))].length, bg: CLR.cardBg, icon: FolderOpen, color: '#FEC24A' },
    { label: 'Published Blogs', value: blogs.length, bg: CLR.cardBg, icon: Globe, color: '#FC763A' },
  ];

  return (
    <div style={S.root} className="admin-layout">
      {/* ── Sidebar ── */}
      <aside style={{ ...S.sidebar, width: collapsed ? 70 : 240, transition: 'all 0.2s ease-in-out' }}>
        {collapsed ? (
          <div style={{ ...S.sidebarLogo, justifyContent: 'center' }}>
            <button onClick={() => setCollapsed(false)} style={S.toggleBtn} className="admin-toggle-btn" title="Expand Sidebar">
              <PanelLeftOpen size={20} color="#475569" />
            </button>
          </div>
        ) : (
          <div style={{ ...S.sidebarLogo, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '32px', objectFit: 'contain', width: 'auto' }} />
            <button onClick={() => setCollapsed(true)} style={S.toggleBtn} className="admin-toggle-btn" title="Collapse Sidebar">
              <PanelLeftClose size={20} color="#475569" />
            </button>
          </div>
        )}

        <div style={{ padding: '0 0.5rem' }}>
          {collapsed ? (
            <div
              style={{ ...S.navItem, justifyContent: 'center', padding: '0.75rem 0' }}
              className="admin-nav-collapsed-active"
              title="Blogs"
            >
              <FileText size={20} color={CLR.primary} />
            </div>
          ) : (
            <div style={{ ...S.navItem, ...S.navItemActive }}>
              <FileText size={20} color={CLR.primary} /> Blogs
            </div>
          )}
        </div>

        <div style={S.sidebarSpacer} />
        {collapsed ? (
          <button
            style={{ ...S.logoutBtn, margin: '0.5rem auto', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
            className="admin-logout-btn"
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        ) : (
          <button style={S.logoutBtn} className="admin-logout-btn" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </button>
        )}
      </aside>

      {/* ── Main ── */}
      <main style={S.main}>
        <div ref={contentRef} style={S.content}>
          {/* Topbar */}
          <div style={S.topbar}>
            <div>
              <div style={{ color: '#000000ff', fontSize: '2rem', marginTop: '0.25rem', opacity: 0.9 }}>Blogs Management</div>
              <div style={{ color: '#ffffff', fontSize: '1rem', marginTop: '0.25rem', opacity: 0.9 }}>Manage your blog posts and articles</div>
            </div>
            <button
              id={`admin-add-blogs-btn`}
              className="admin-btn-add"
              style={S.addBtn}
              onClick={() => { setEditItem(null); setShowForm(true); }}
            >
              <PlusCircle size={15} /> Add Blog
            </button>
          </div>

          {/* Stats */}
          <div style={S.statsRow}>
            {stats.map(({ label, value, bg, icon: StatIcon, color }) => (
              <div
                key={label}
                className="admin-stat-card"
                style={{
                  ...S.statCard,
                  background: bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ ...S.statAccent, background: `linear-gradient(180deg, ${color}, ${color}dd)` }} />
                  <div>
                    <div style={S.statVal}>{value}</div>
                    <div style={S.statLabel}>{label}</div>
                  </div>
                </div>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: color === '#FC763A' ? 'rgba(252, 118, 58, 0.08)' : 'rgba(254, 194, 74, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: color,
                  marginRight: '0.25rem'
                }}>
                  <StatIcon size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Table card */}
          <div style={S.tableCard}>
            {loading ? (
              <div style={S.center}>
                <Loader2 size={28} color={CLR.primary} style={{ animation: 'spin 1s linear infinite' }} />
                <span style={{ color: CLR.textMuted, fontSize: '0.85rem' }}>Loading blogs…</span>
              </div>
            ) : fetchError ? (
              <div style={S.center}>
                <AlertCircle size={28} color={CLR.danger} />
                <span style={{ color: CLR.danger, fontSize: '0.85rem', textAlign: 'center', maxWidth: 400 }}>{fetchError}</span>
                <button
                  onClick={() => fetchData()}
                  style={{ ...S.addBtn, marginTop: '0.5rem', fontSize: '0.78rem', padding: '0.45rem 1rem' }}
                >
                  Retry
                </button>
              </div>
            ) : blogs.length === 0 ? (
              <div style={S.center}>
                <FolderOpen size={32} color={CLR.border} />
                <span style={{ color: CLR.textMuted, fontSize: '0.85rem' }}>No blogs yet. Click "Add Blog" to get started.</span>
              </div>
            ) : (
              <>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={S.tableHead}>
                      <tr>
                        <th style={{ ...S.th, width: '60px', textAlign: 'center' }}>#</th>
                        <th style={S.th}>Image</th>
                        <th style={S.th}>Title</th>
                        <th style={S.th}>Category</th>
                        <th
                          style={{ ...S.th, cursor: 'pointer', userSelect: 'none' }}
                          onClick={() => handleSort('date')}
                          title="Click to sort by date"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            Date
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1px' }}>
                              <ArrowUp
                                size={13}
                                strokeWidth={3}
                                style={{ display: 'block', color: sortBy === 'date' && sortDirection === 'asc' ? '#1e293b' : '#cbd5e1', transition: 'color 0.15s' }}
                              />
                              <ArrowDown
                                size={13}
                                strokeWidth={3}
                                style={{ display: 'block', color: sortBy === 'date' && sortDirection === 'desc' ? '#1e293b' : '#cbd5e1', transition: 'color 0.15s' }}
                              />
                            </div>
                          </div>
                        </th>
                        <th
                          style={{ ...S.th, cursor: 'pointer', userSelect: 'none' }}
                          onClick={() => handleSort('readTime')}
                          title="Click to sort by read time"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            Read Time
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1px' }}>
                              <ArrowUp
                                size={13}
                                strokeWidth={3}
                                style={{ display: 'block', color: sortBy === 'readTime' && sortDirection === 'asc' ? '#1e293b' : '#cbd5e1', transition: 'color 0.15s' }}
                              />
                              <ArrowDown
                                size={13}
                                strokeWidth={3}
                                style={{ display: 'block', color: sortBy === 'readTime' && sortDirection === 'desc' ? '#1e293b' : '#cbd5e1', transition: 'color 0.15s' }}
                              />
                            </div>
                          </div>
                        </th>
                        <th style={{ ...S.th, textAlign: 'center' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBlogs.map((item: any, i) => (
                        <tr
                          key={item._id}
                          style={{ background: '#ffffff' }}
                          className="admin-table-row"
                        >
                          <td style={{ ...S.td, textAlign: 'center', fontWeight: 600, color: CLR.textMuted }}>
                            {(currentPage - 1) * itemsPerPage + i + 1}
                          </td>
                          <td style={S.td}>
                            {item.image ? (
                              <img
                                src={getImageUrl(item.image)}
                                alt={item.title}
                                style={S.imgThumb}
                                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                              />
                            ) : (
                              <div style={S.imgPlaceholder}>No img</div>
                            )}
                          </td>
                          <td style={S.td}>
                            <div style={{ fontWeight: 600 }}>{item.title || '—'}</div>
                          </td>
                          <td style={S.td}>
                            {item.categories ? <span style={S.badge}>{item.categories}</span> : '—'}
                          </td>
                          <td style={{ ...S.td, ...S.tdMuted }}>{item.date || '—'}</td>
                          <td style={{ ...S.td, ...S.tdMuted }}>{item.readTime || '—'}</td>
                          <td style={{ ...S.td, textAlign: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center' }}>
                              <button
                                title={`Edit blog`}
                                style={{ ...S.actionBtn, ...S.editBtn }}
                                onClick={() => { setEditItem(item); setShowForm(true); }}
                              >
                                <Pencil size={14} />
                              </button>
                              <button
                                title={`Delete blog`}
                                style={{ ...S.actionBtn, ...S.deleteBtn }}
                                onClick={() => setDeletingId(item._id!)}
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    borderTop: `1px solid ${CLR.border}`,
                    background: '#fafbfc',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}>
                    <div style={{ fontSize: '0.8rem', color: CLR.textMuted }}>
                      Showing <span style={{ fontWeight: 600, color: CLR.textDark }}>{(currentPage - 1) * itemsPerPage + 1}</span> to <span style={{ fontWeight: 600, color: CLR.textDark }}>{Math.min(currentPage * itemsPerPage, sortedBlogs.length)}</span> of <span style={{ fontWeight: 600, color: CLR.textDark }}>{sortedBlogs.length}</span> blogs
                    </div>
                    <div style={{ display: 'flex', gap: '0.3rem' }}>
                      <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        style={{
                          padding: '0.45rem 0.85rem',
                          border: `1px solid ${CLR.border}`,
                          background: currentPage === 1 ? '#f1f5f9' : '#ffffff',
                          color: currentPage === 1 ? '#94a3b8' : CLR.textDark,
                          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          borderRadius: '0px',
                          transition: 'all 0.15s',
                        }}
                        className={currentPage === 1 ? '' : 'admin-pag-btn'}
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          style={{
                            padding: '0.45rem 0.85rem',
                            border: `1px solid ${page === currentPage ? '#FC763A' : CLR.border}`,
                            background: page === currentPage ? '#FC763A' : '#ffffff',
                            color: page === currentPage ? '#ffffff' : CLR.textDark,
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            borderRadius: '0px',
                            transition: 'all 0.15s',
                          }}
                          className={page === currentPage ? '' : 'admin-pag-btn'}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        style={{
                          padding: '0.45rem 0.85rem',
                          border: `1px solid ${CLR.border}`,
                          background: currentPage === totalPages ? '#f1f5f9' : '#ffffff',
                          color: currentPage === totalPages ? '#94a3b8' : CLR.textDark,
                          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          borderRadius: '0px',
                          transition: 'all 0.15s',
                        }}
                        className={currentPage === totalPages ? '' : 'admin-pag-btn'}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* ── Forms ── */}
      {showForm && (
        <BlogForm
          blog={editItem as Blog}
          onSuccess={handleFormSuccess}
          onClose={() => { setShowForm(false); setEditItem(null); }}
        />
      )}

      {/* ── Logout Confirmation ── */}
      {showLogoutConfirm && (
        <div style={S.confirmOverlay}>
          <div style={S.confirmBox}>
            <div style={S.confirmIcon}>
              <LogOut size={22} color={CLR.danger} />
            </div>
            <div style={S.confirmTitle}>Confirm Logout</div>
            <div style={S.confirmSub}>
              Are you sure you want to log out of the admin panel?
            </div>
            <div style={S.confirmRow}>
              <button style={S.confirmCancel} onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
              <button style={S.confirmDelete} onClick={confirmLogout}>Yes, Logout</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation ── */}
      {deletingId && (
        <div style={S.confirmOverlay}>
          <div style={S.confirmBox}>
            <div style={S.confirmIcon}>
              <Trash2 size={22} color={CLR.danger} />
            </div>
            <div style={S.confirmTitle}>Delete Blog?</div>
            <div style={S.confirmSub}>
              This will permanently delete the item and its images from the server. This action cannot be undone.
            </div>
            <div style={S.confirmRow}>
              <button style={S.confirmCancel} onClick={() => setDeletingId(null)}>Cancel</button>
              <button
                style={{ ...S.confirmDelete, opacity: deleteLoading ? 0.7 : 1 }}
                onClick={confirmDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? 'Deleting…' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 2000,
          background: '#1e293b', color: '#fff', borderRadius: '10px',
          padding: '0.75rem 1.25rem', fontSize: '0.85rem', fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          animation: 'fadeIn 0.2s ease',
        }}>
          ✓ {toast}
        </div>
      )}

      <style>{`
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeIn  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        .admin-btn-add {
          background: #FC763A !important;
          color: #ffffff !important;
          border: 1px solid #FC763A !important;
        }
        .admin-btn-add:hover {
          background: #e05e26 !important;
          border-color: #e05e26 !important;
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(252, 118, 58, 0.3) !important;
          transform: translateY(-1px);
        }
        .admin-btn-add:active {
          transform: translateY(0);
        }
        .admin-logout-btn {
          border: 1px solid rgba(239, 68, 68, 0.4) !important;
          color: #ef4444 !important;
        }
        .admin-logout-btn:hover {
          background: #ef4444 !important;
          color: #ffffff !important;
          border-color: #ef4444 !important;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25) !important;
        }
        .admin-stat-card {
          transition: all 0.2s ease !important;
        }
        .admin-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08) !important;
        }
        .admin-table-row {
          transition: background 0.15s ease-in-out;
        }
        .admin-table-row:hover {
          background: #f8fafc !important;
        }
        .admin-pag-btn {
          transition: all 0.15s ease-in-out !important;
        }
        .admin-pag-btn:hover {
          border-color: #FC763A !important;
          color: #FC763A !important;
          background: rgba(252, 118, 58, 0.03) !important;
        }
        
        .admin-toggle-btn:hover {
          background: rgba(0, 0, 0, 0.05) !important;
        }

        .admin-nav-collapsed-active {
          background: #ffffff !important;
          border: 1px solid #E2E5E9 !important;
          border-left: 4px solid #FC763A !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03) !important;
          border-radius: 10px !important;
          padding-left: 0px !important;
        }
      `}</style>
    </div>
  );
}
