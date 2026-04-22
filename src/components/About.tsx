'use client'
import { portfolioData } from '@/data/portfolio'

export default function About() {
  const { bio, education, certifications } = portfolioData
  return (
    <section id="about" style={{ padding:'120px 40px', background:'var(--bg-alt)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'4px', background:'var(--yellow)' }} />
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div className="section-label" style={{ marginBottom:'56px' }}>About Me</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'start' }} className="about-grid">
          <div>
            <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(2rem,5vw,3.5rem)', color:'var(--text)', letterSpacing:'-0.03em', lineHeight:1, marginBottom:'24px' }}>
              HELLO<span style={{ color:'var(--yellow)' }}>.</span>
            </h2>
            <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.97rem', color:'var(--text-2)', lineHeight:1.9, marginBottom:'36px' }}>{bio}</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              {[
                { num:'2+',   label:'Projects Deployed'       },
                { num:'85%+', label:'Model Accuracy Achieved'  },
                { num:'2027', label:'Expected Graduation'      },
                { num:'4+',   label:'Certs & Events'           },
              ].map(s => (
                <div key={s.label} style={{ padding:'20px', background:'var(--bg-card)', border:`1.5px solid var(--border)`, borderTop:'3px solid var(--yellow)' }}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'2rem', color:'var(--text)', letterSpacing:'-0.02em' }}>{s.num}</div>
                  <div style={{ fontFamily:'Space Mono,monospace', fontSize:'0.58rem', color:'var(--text-3)', marginTop:'4px', letterSpacing:'0.05em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'40px' }}>
            <div>
              <h3 style={{ fontFamily:'Space Mono,monospace', fontSize:'0.68rem', color:'var(--text)', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'18px', display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ display:'inline-block', width:'20px', height:'2px', background:'var(--yellow)' }} />Education
              </h3>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {education.map((e,i) => (
                  <div key={i} style={{ padding:'16px', background:'var(--bg-card)', border:`1.5px solid var(--border)`, borderLeft:'3px solid var(--yellow)', transition:'border-color 0.2s' }}>
                    <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.88rem', color:'var(--text)', marginBottom:'2px' }}>{e.degree}</div>
                    <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.78rem', color:'var(--text-2)' }}>{e.institution}</div>
                    <div style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'var(--text-3)', marginTop:'3px' }}>{e.period}{e.score?` · ${e.score}`:''}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily:'Space Mono,monospace', fontSize:'0.68rem', color:'var(--text)', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'18px', display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ display:'inline-block', width:'20px', height:'2px', background:'var(--yellow)' }} />Certifications
              </h3>
              <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                {certifications.map((c,i) => (
                  <a key={i} href={c.link} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 16px', background:'var(--bg-card)', border:`1.5px solid var(--border)`, textDecoration:'none', transition:'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='var(--yellow)'; e.currentTarget.style.background='var(--yellow-bg)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--bg-card)' }}
                  >
                    <div>
                      <div style={{ fontFamily:'DM Sans,sans-serif', fontWeight:500, fontSize:'0.84rem', color:'var(--text)' }}>{c.title}</div>
                      <div style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'var(--text-3)', marginTop:'2px' }}>{c.issuer}</div>
                    </div>
                    <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'var(--yellow)', fontWeight:700, whiteSpace:'nowrap', marginLeft:'12px' }}>{c.date}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
    </section>
  )
}
