import { useState, useEffect, useRef } from 'react'

const teams = [
  {
    label: 'Defence Academy Team',
    bg:    '#fff3e0',
    icon:  '🛡️',
    msg:   'Hello! I want to enquire about Defence Academy admission.',
  },
  {
    label: 'Public School Team',
    bg:    '#d1fae5',
    icon:  '📚',
    msg:   'Hello! I want to enquire about Public School admission.',
  },
  {
    label: 'Sniper Classes Team',
    bg:    '#ede9fe',
    icon:  '🎓',
    msg:   'Hello! I want to enquire about Sniper Classes (IIT/NEET).',
  },
]

const PHONE = '917060155711'

export default function WhatsappButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        bottom: '26px',
        right: '26px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {/* Popup Menu */}
      {open && (
        <div style={{
          background: '#ffffff',
          borderRadius: '14px',
          padding: '12px',
          boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
          border: '1px solid #e8edf4',
          minWidth: '220px',
        }}>
          <p style={{
            fontSize: '10px',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '0 8px 8px',
            marginBottom: '8px',
            borderBottom: '1px solid #e8edf4',
            margin: 0,
          }}>
            Chat with us on WhatsApp
          </p>

          {teams.map((team) => (
            <a
              key={team.label}
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(team.msg)}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 10px',
                borderRadius: '9px',
                textDecoration: 'none',
                color: '#0d1b3e',
                fontSize: '13px',
                fontWeight: 600,
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f7fa'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: team.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0,
              }}>
                {team.icon}
              </span>
              {team.label}
            </a>
          ))}
        </div>
      )}

      {/* Main Button */}
      <div style={{ position: 'relative', width: '54px', height: '54px' }}>
        <span style={{
          position: 'absolute',
          inset: '-4px',
          borderRadius: '50%',
          border: '2px solid #25D366',
          animation: 'wapulse 1.8s ease-out infinite',
          pointerEvents: 'none',
        }} />
        <button
          onClick={() => setOpen(prev => !prev)}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: '#25D366',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg viewBox="0 0 48 48" style={{ width: '26px', height: '26px', fill: 'white' }}>
            <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 10L4 44l10.3-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.1 1.6 1.6-5.9-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.7-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.8-.2-1.1.2s-1.3 1.5-1.6 1.9c-.3.3-.6.4-1.1.1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.4-2.8-2.6-3.2-.3-.5 0-.7.2-.9l.7-.8c.2-.2.3-.5.4-.7.1-.2 0-.5-.1-.7s-1.1-2.7-1.5-3.6c-.4-.9-.8-.8-1.1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.3 5.2 8.1 7.1 1.1.5 2 .8 2.7 1 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.3-.5-.4-1-.6z"/>
          </svg>
        </button>
      </div>

      <style>{`@keyframes wapulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } }`}</style>
    </div>
  )
}np