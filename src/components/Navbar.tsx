'use client'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

const navLinks = [
  { label:'About',    href:'#about'    },
  { label:'Skills',   href:'#skills'   },
  { label:'Projects', href:'#projects' },
  { label:'Contact',  href:'#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { theme, toggle }         = useTheme()
  const isDark                    = theme === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled
    ? isDark ? 'rgba(10,10,10,0.95)' : 'rgba(255,255,255,0.95)'
    : 'transparent'
  const navBorder = scrolled
    ? isDark ? '1px solid #222' : '1px solid #E5E5E2'
    : 'none'

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      padding:'18px 40px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background:navBg,
      backdropFilter:scrolled ? 'blur(14px)' : 'none',
      borderBottom:navBorder,
      transition:'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#" style={{ textDecoration:'none' }}>
        <span style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1.3rem', color:'var(--text)', letterSpacing:'-0.02em' }}>
          HA<span style={{ color:'var(--yellow)' }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display:'flex', gap:'32px', alignItems:'center' }} className="desk-nav">
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="hover-underline"
            style={{ fontFamily:'Space Mono,monospace', fontSize:'0.72rem', color:'var(--text-2)', textDecoration:'none', letterSpacing:'0.05em', transition:'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color='var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color='var(--text-2)')}
          >{l.label}</a>
        ))}

        {/* Theme toggle */}
        <button onClick={toggle} title="Toggle theme"
          style={{
            width:'40px', height:'40px',
            border:`1.5px solid var(--border)`,
            background:'var(--bg-card)',
            borderRadius:'50%',
            display:'flex', alignItems:'center', justifyContent:'center',
            cursor:'pointer', fontSize:'1rem',
            transition:'all 0.2s',
          }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor='var(--yellow)'; el.style.background='var(--yellow-bg)' }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor='var(--border)'; el.style.background='var(--bg-card)' }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <a href="mailto:harshagrawal050903@gmail.com"
          style={{ fontFamily:'Space Mono,monospace', fontSize:'0.7rem', background:'var(--text)', color:isDark?'#0A0A0A':'#fff', padding:'9px 20px', fontWeight:700, textDecoration:'none', letterSpacing:'0.05em', transition:'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background='var(--yellow)')}
          onMouseLeave={e => (e.currentTarget.style.background='var(--text)')}
        >HIRE ME</a>
      </div>

      {/* Mobile: theme + hamburger */}
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }} className="mob-right">
        <button onClick={toggle}
          style={{ width:'36px', height:'36px', border:`1.5px solid var(--border)`, background:'var(--bg-card)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:'0.9rem' }}
        >{isDark ? '☀️' : '🌙'}</button>

        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background:'none', border:'none', cursor:'pointer', display:'flex', flexDirection:'column', gap:'5px' }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display:'block', width:'22px', height:'2px', background:'var(--text)', transition:'all 0.3s' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position:'fixed', inset:0, background:'var(--bg)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'36px', zIndex:200 }}>
          <button onClick={() => setMenuOpen(false)}
            style={{ position:'absolute', top:'24px', right:'24px', background:'none', border:'none', fontSize:'1.5rem', cursor:'pointer', color:'var(--text)' }}>✕</button>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily:'Syne,sans-serif', fontSize:'2.2rem', fontWeight:800, color:'var(--text)', textDecoration:'none', letterSpacing:'-0.02em' }}
            >{l.label}</a>
          ))}
          <a href="mailto:harshagrawal050903@gmail.com"
            style={{ fontFamily:'Space Mono,monospace', fontSize:'0.8rem', background:'var(--yellow)', color:'#111', padding:'12px 32px', fontWeight:700, textDecoration:'none' }}
          >HIRE ME</a>
        </div>
      )}

      <style>{`
        @media (max-width:768px) {
          .desk-nav  { display:none !important; }
          .mob-right { display:flex !important; }
        }
        @media (min-width:769px) {
          .mob-right { display:none !important; }
        }
      `}</style>
    </nav>
  )
}
