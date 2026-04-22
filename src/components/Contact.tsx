'use client'
import { portfolioData } from '@/data/portfolio'

export default function Contact() {
  const { social, email, phone } = portfolioData
  const links = [
    { label:'GitHub',    sub:'Check my code',      href:social.github,    bg:'#111',
      icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
    { label:'LinkedIn',  sub:'Connect with me',    href:social.linkedin,  bg:'#0077B5',
      icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
    { label:'Gmail',     sub:email,                href:social.email,     bg:'#EA4335',
      icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
    { label:'Instagram', sub:'Follow my journey',  href:social.instagram, bg:'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
      icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { label:'Phone',     sub:phone,                href:`tel:${phone}`,   bg:'#22C55E',
      icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.33a2 2 0 0 1 1.95-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  ]
  return (
    <section id="contact" style={{ padding:'120px 40px', background:'#0A0A0A', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', bottom:'-20px', left:'50%', transform:'translateX(-50%)', fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(4rem,12vw,12rem)', color:'rgba(245,197,24,0.03)', letterSpacing:'-0.05em', userSelect:'none', whiteSpace:'nowrap', pointerEvents:'none' }}>CONTACT</div>
      <div style={{ position:'absolute', top:'40px', right:'60px', width:'130px', height:'130px', backgroundImage:'radial-gradient(circle, rgba(245,197,24,0.25) 1.5px, transparent 1.5px)', backgroundSize:'16px 16px', opacity:0.5 }} />
      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'56px' }}>
          <span style={{ display:'inline-block', width:'32px', height:'2px', background:'#F5C518' }} />
          <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.68rem', color:'#888', letterSpacing:'0.2em', textTransform:'uppercase' }}>Get In Touch</span>
        </div>
        <div style={{ marginBottom:'64px' }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(2.5rem,8vw,6rem)', lineHeight:0.95, letterSpacing:'-0.03em', color:'#fff', marginBottom:'20px' }}>
            Let's Work<br/><span style={{ color:'#F5C518' }}>Together.</span>
          </h2>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.95rem', color:'#888', maxWidth:'420px', lineHeight:1.8, marginBottom:'32px' }}>
            Open to internships, freelance & collabs. I reply within 24 hrs.
          </p>
          <a href={`mailto:${email}`}
            style={{ display:'inline-block', background:'#F5C518', color:'#111', fontFamily:'Space Mono,monospace', fontSize:'0.78rem', fontWeight:700, padding:'15px 36px', textDecoration:'none', letterSpacing:'0.08em', transition:'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity='0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity='1')}
          >SAY HELLO →</a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'8px' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', alignItems:'center', gap:'14px', padding:'18px 20px', background:'#161616', border:'1.5px solid #222', textDecoration:'none', transition:'all 0.25s ease' }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background='#1f1f1f'; el.style.borderColor='#F5C518'; el.style.transform='translateY(-3px)' }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background='#161616'; el.style.borderColor='#222'; el.style.transform='translateY(0)' }}
            >
              <div style={{ width:'40px', height:'40px', background:l.bg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, borderRadius:'6px' }}>{l.icon}</div>
              <div style={{ overflow:'hidden' }}>
                <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.88rem', color:'#fff', marginBottom:'2px' }}>{l.label}</div>
                <div style={{ fontFamily:'Space Mono,monospace', fontSize:'0.57rem', color:'#555', letterSpacing:'0.02em', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{l.sub}</div>
              </div>
              <div style={{ marginLeft:'auto', color:'#333', flexShrink:0 }}>→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
