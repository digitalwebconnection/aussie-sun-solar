import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { apiUrl } from '../../lib/api';
import logo from '../../assets/logo.png';

/* ── Styles ────────────────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at 10% 20%, rgba(254, 194, 74, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(252, 118, 58, 0.18) 0%, transparent 50%), linear-gradient(135deg, #FFF5EE 0%, #E8F0FE 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: '1rem',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    background: '#ffffff',
    border: '1px solid #E2E5E9',
    borderTop: '4px solid #FC763A',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    boxShadow: '0 20px 40px rgba(252, 118, 58, 0.05), 0 1px 3px rgba(0,0,0,0.02)',
  },

  subtitle: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  label: {
    display: 'block',
    color: '#475569',
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '0.45rem',
  },
  inputWrap: {
    position: 'relative',
    marginBottom: '1.25rem',
  },
  inputIcon: {
    position: 'absolute',
    left: '0.95rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    pointerEvents: 'none',
    display: 'flex',
  },
  input: {
    width: '100%',
    padding: '0.65rem 2.6rem 0.65rem 2.6rem',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    color: '#1e293b',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.18s ease-in-out',
  },
  eyeBtn: {
    position: 'absolute',
    right: '0.95rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#94a3b8',
    padding: 0,
    display: 'flex',
    transition: 'color 0.15s ease',
  },
  error: {
    background: '#fff5f5',
    border: '1px solid #fca5a5',
    borderRadius: '8px',
    color: '#dc2626',
    fontSize: '0.8rem',
    padding: '0.6rem 0.9rem',
    marginBottom: '1.25rem',
    textAlign: 'center',
    fontWeight: 500,
  },
  btn: {
    width: '100%',
    padding: '0.7rem',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '0.92rem',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '0.05em',
    transition: 'all 0.2s ease-in-out',
    marginTop: '0.5rem',
    boxShadow: '0 4px 12px rgba(252,118,58,0.25)',
  },
  hint: {
    marginTop: '1.75rem',
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
};

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('adminAuth') === 'true') {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(data.message || 'Invalid username or password. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div style={S.page}>
      <div style={S.card}>
        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <img src={logo} alt="Aussie Sun Solar Logo" style={{ height: '38px', objectFit: 'contain', width: 'auto' }} />
        </div>
        <p style={S.subtitle}>Admin Panel</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <label style={S.label}>Username</label>
          <div style={S.inputWrap}>
            <span style={S.inputIcon}><User size={15} /></span>
            <input
              id="admin-username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              style={S.input}
              className="login-input"
              onFocus={e => (e.currentTarget.style.borderColor = '#FC763A')}
              onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
            />
          </div>

          {/* Password */}
          <label style={S.label}>Password</label>
          <div style={S.inputWrap}>
            <span style={S.inputIcon}><Lock size={15} /></span>
            <input
              id="admin-password"
              type={showPass ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              style={S.input}
              className="login-input"
              onFocus={e => (e.currentTarget.style.borderColor = '#FC763A')}
              onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
            />
            <button
              type="button"
              style={S.eyeBtn}
              className="login-eye-btn"
              onClick={() => setShowPass(p => !p)}
              aria-label={showPass ? 'Hide password' : 'Show password'}
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>

          {error && <div style={S.error}>{error}</div>}

          <button
            type="submit"
            style={{ ...S.btn, opacity: loading ? 0.7 : 1 }}
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p style={S.hint}>ass Energy · Secure Admin Access</p>
      </div>
      <style>{`
        .login-input {
          border: 1px solid #cbd5e1 !important;
          transition: all 0.18s ease-in-out !important;
        }
        .login-input:focus {
          border-color: #FC763A !important;
          box-shadow: 0 0 0 3px rgba(252, 118, 58, 0.15) !important;
        }
        .login-eye-btn {
          transition: color 0.15s ease !important;
        }
        .login-eye-btn:hover {
          color: #1e293b !important;
        }
        .login-btn {
          background: #FC763A !important;
          color: #ffffff !important;
          border-color: #FC763A !important;
          transition: all 0.2s ease-in-out !important;
        }
        .login-btn:hover {
          background: #e05e26 !important;
          border-color: #e05e26 !important;
          box-shadow: 0 5px 15px rgba(252, 118, 58, 0.35) !important;
          transform: translateY(-1px);
        }
        .login-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
