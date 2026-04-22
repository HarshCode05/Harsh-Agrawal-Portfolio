'use client'
import { useTheme } from './ThemeContext'
import { portfolioData } from '@/data/portfolio'
import ParticleHero from './ParticleHero'

export default function Hero() {
  const { name, tagline, role, social } = portfolioData
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const first = name.split(' ')[0]
  const last  = name.split(' ')[1]

  return (
    <section id="home" style={{
      minHeight:'100vh',
      background:'var(--bg)',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      padding:'100px 40px 60px',
      position:'relative',
      overflow:'hidden',
    }}>
      {/* Particle canvas — full section */}
      <ParticleHero />

      {/* Yellow corner blob */}
      <div style={{ position:'absolute', top:0, right:0, width:'320px', height:'320px', background:'var(--yellow)', borderRadius:'0 0 0 100%', opacity:isDark?0.06:0.1, zIndex:0, pointerEvents:'none' }} />

      {/* Dot grid */}
      <div style={{ position:'absolute', bottom:'60px', right:'60px', width:'140px', height:'140px', backgroundImage:'radial-gradient(circle, var(--yellow) 1.5px, transparent 1.5px)', backgroundSize:'16px 16px', opacity:0.2, zIndex:0, pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:1, maxWidth:'1100px', margin:'0 auto', width:'100%' }}>

        {/* Badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'var(--yellow-bg)', border:`1.5px solid var(--yellow)`, padding:'6px 16px', marginBottom:'36px', fontFamily:'Space Mono,monospace', fontSize:'0.68rem', color:'var(--text)', letterSpacing:'0.1em' }}>
          <span style={{ width:'7px', height:'7px', background:'var(--yellow)', borderRadius:'50%', animation:'blink 1.5s ease-in-out infinite' }} />
          OPEN TO OPPORTUNITIES
        </div>

        {/* Name */}
        <h1 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(3.5rem,10vw,9rem)', lineHeight:0.88, letterSpacing:'-0.03em', color:'var(--text)', marginBottom:'4px' }}>
          {first}
          <br/>
          <span style={{ color:'var(--yellow)' }}>{last}</span>
          <span style={{ color:'var(--yellow)' }}>.</span>
        </h1>

        {/* Role tag */}
        <div style={{ display:'inline-block', background:'var(--yellow)', color:'#111', fontFamily:'Space Mono,monospace', fontSize:'0.72rem', fontWeight:700, padding:'6px 16px', letterSpacing:'0.05em', margin:'24px 0 20px' }}>
          {role}
        </div>

        {/* Tagline */}
        <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'clamp(1rem,2vw,1.3rem)', color:'var(--text-2)', fontWeight:400, maxWidth:'480px', lineHeight:1.7, marginBottom:'48px', fontStyle:'italic' }}>
          "{tagline}"
        </p>

        {/* CTA */}
        <div style={{ display:'flex', gap:'14px', flexWrap:'wrap', alignItems:'center', marginBottom:'60px' }}>
          <a href="#projects"
            style={{ display:'inline-block', background:'var(--text)', color:isDark?'#0A0A0A':'#fff', fontFamily:'Space Mono,monospace', fontSize:'0.72rem', fontWeight:700, padding:'14px 32px', textDecoration:'none', letterSpacing:'0.05em', transition:'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background='var(--yellow)')}
            onMouseLeave={e => (e.currentTarget.style.background='var(--text)')}
          >VIEW PROJECTS →</a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-block', border:`1.5px solid var(--border)`, color:'var(--text)', fontFamily:'Space Mono,monospace', fontSize:'0.72rem', fontWeight:700, padding:'14px 32px', textDecoration:'none', letterSpacing:'0.05em', transition:'all 0.2s', background:'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--yellow)'; e.currentTarget.style.background='var(--yellow-bg)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='transparent' }}
          >DOWNLOAD CV</a>
        </div>

        {/* Social icons */}
        <div style={{ display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'var(--text-3)', letterSpacing:'0.12em' }}>FIND ME ON</span>
          <div style={{ width:'28px', height:'1.5px', background:'var(--border)' }} />
          {[
            { label:'GitHub',    href:social.github,
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
            { label:'LinkedIn',  href:social.linkedin,
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
            { label:'Gmail',     href:social.email,
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
            { label:'Instagram', href:social.instagram,
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
              style={{ width:'42px', height:'42px', border:`1.5px solid var(--border)`, background:'var(--bg-card)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-2)', textDecoration:'none', transition:'all 0.2s' }}
              onMouseEnter={e => { const el=e.currentTarget; el.style.borderColor='var(--yellow)'; el.style.color='var(--text)'; el.style.background='var(--yellow-bg)' }}
              onMouseLeave={e => { const el=e.currentTarget; el.style.borderColor='var(--border)'; el.style.color='var(--text-2)'; el.style.background='var(--bg-card)' }}
            >{s.icon}</a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:'28px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', zIndex:1 }}>
        <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.55rem', color:'var(--text-3)', letterSpacing:'0.15em' }}>SCROLL</span>
        <div style={{ width:'1px', height:'40px', background:`linear-gradient(to bottom, var(--yellow), transparent)`, animation:'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
