'use client'
import { portfolioData } from '@/data/portfolio'
import { useTheme } from './ThemeContext'
import FloatingOrbs from './FloatingOrbs'

const catColors: Record<string,string> = {
  'Languages':        '#F5C518',
  'Data & ML':        '#FF6B6B',
  'Frameworks':       '#4ECDC4',
  'Tools & Platforms':'#6C63FF',
  'Core CS':          '#F5C518',
  'Soft Skills':      '#888',
}

export default function Skills() {
  const { skills } = portfolioData
  const { theme }  = useTheme()
  const isDark     = theme === 'dark'

  return (
    <section id="skills" style={{ padding:'120px 40px', background:'var(--bg)', position:'relative', overflow:'hidden' }}>
      {/* Big watermark */}
      <div style={{ position:'absolute', right:'-10px', top:'50%', transform:'translateY(-50%) rotate(90deg)', fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'9rem', color: isDark ? 'rgba(245,197,24,0.04)' : 'rgba(0,0,0,0.03)', userSelect:'none', pointerEvents:'none', whiteSpace:'nowrap' }}>
        SKILLS
      </div>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>
        <div className="section-label" style={{ marginBottom:'56px' }}>Technical Skills</div>

        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(2rem,4vw,3rem)', color:'var(--text)', letterSpacing:'-0.02em', marginBottom:'16px' }}>
          What I Work With<span style={{ color:'var(--yellow)' }}>.</span>
        </h2>
        <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.9rem', color:'var(--text-2)', marginBottom:'0px' }}>
          Hover the orbs below — or scroll for a detailed breakdown.
        </p>

        {/* ── FLOATING ORBS ── */}
        <FloatingOrbs />

        {/* ── SKILL CARDS ── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))', gap:'10px', marginTop:'16px' }}>
          {skills.map((g, i) => {
            const color = catColors[g.category] || '#F5C518'
            return (
              <div key={i}
                style={{ padding:'24px', background:'var(--bg-card)', border:`1.5px solid var(--border)`, borderTop:`3px solid ${color}`, transition:'all 0.25s ease' }}
                onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.transform='translateY(-4px)'; el.style.boxShadow=`0 12px 32px ${color}22`; el.style.borderColor=color }}
                onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.transform='translateY(0)'; el.style.boxShadow='none'; el.style.borderColor='var(--border)'; el.style.borderTopColor=color }}
              >
                <div style={{ fontFamily:'Space Mono,monospace', fontSize:'0.62rem', color, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'14px', fontWeight:700 }}>
                  {g.category}
                </div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'7px' }}>
                  {g.items.map(skill => (
                    <span key={skill}
                      style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.8rem', color:'var(--text)', background:'var(--bg-alt)', padding:'4px 11px', border:`1.5px solid var(--border)`, fontWeight:500, transition:'all 0.15s', cursor:'default' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor='var(--yellow)'; e.currentTarget.style.background='var(--yellow-bg)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--bg-alt)' }}
                    >{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Marquee */}
        <div style={{ marginTop:'64px', overflow:'hidden', borderTop:`1.5px solid var(--border)`, borderBottom:`1.5px solid var(--border)`, padding:'14px 0', background:'var(--bg-alt)' }}>
          <div style={{ display:'flex', gap:'48px', animation:'marquee 22s linear infinite', width:'max-content' }}>
            {[...Array(3)].flatMap(() =>
              ['Python','SQL','Machine Learning','Streamlit','Power BI','Pandas','Scikit-learn','Git','Data Analysis','Next.js'].map(s => (
                <span key={Math.random()} style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.8rem', color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.1em', whiteSpace:'nowrap' }}>
                  {s} <span style={{ color:'var(--yellow)' }}>✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
