'use client'
import { portfolioData } from '@/data/portfolio'

export default function Projects() {
  const { projects } = portfolioData
  return (
    <section id="projects" style={{ padding:'120px 40px', background:'var(--bg-alt)' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div className="section-label" style={{ marginBottom:'56px' }}>Projects</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'52px', flexWrap:'wrap', gap:'16px' }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(2rem,4vw,3rem)', color:'var(--text)', letterSpacing:'-0.02em' }}>
            Things I've Built<span style={{ color:'var(--yellow)' }}>.</span>
          </h2>
          <a href="https://github.com/HarshCode05" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:'Space Mono,monospace', fontSize:'0.68rem', color:'var(--text)', textDecoration:'none', letterSpacing:'0.05em', borderBottom:'2px solid var(--yellow)', paddingBottom:'2px' }}>
            ALL ON GITHUB →
          </a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:'12px' }}>
          {projects.map((p,i) => <ProjectCard key={i} project={p} index={i} />)}
          <div style={{ padding:'40px', border:`1.5px dashed var(--border)`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'12px', minHeight:'260px', background:'var(--bg-card)' }}>
            <div style={{ width:'44px', height:'44px', border:`1.5px dashed var(--border)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', color:'var(--text-3)' }}>+</div>
            <div style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'var(--text-3)', letterSpacing:'0.1em', textAlign:'center' }}>MORE COMING<br/>SOON</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <div
      style={{ padding:'32px', background:'var(--bg-card)', border:`1.5px solid var(--border)`, borderTop:'3px solid var(--yellow)', display:'flex', flexDirection:'column', gap:'16px', transition:'all 0.25s ease', position:'relative', overflow:'hidden', minHeight:'260px' }}
      onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px var(--shadow)' }}
      onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.transform='translateY(0)'; el.style.boxShadow='none' }}
    >
      <div style={{ position:'absolute', top:'14px', right:'18px', fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'3rem', color:'rgba(245,197,24,0.08)', userSelect:'none' }}>0{index+1}</div>
      {project.featured && <div style={{ display:'inline-block', background:'var(--yellow)', color:'#111', fontFamily:'Space Mono,monospace', fontSize:'0.58rem', fontWeight:700, padding:'3px 10px', letterSpacing:'0.1em', width:'fit-content' }}>FEATURED</div>}
      <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.05rem', color:'var(--text)', lineHeight:1.3 }}>{project.title}</h3>
      <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.84rem', color:'var(--text-2)', lineHeight:1.75, flex:1 }}>{project.description}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
        {project.tech.map((t: string) => (
          <span key={t} style={{ fontFamily:'Space Mono,monospace', fontSize:'0.58rem', color:'var(--yellow)', border:`1px solid var(--border)`, padding:'3px 8px', letterSpacing:'0.03em', background:'var(--bg-alt)' }}>{t}</span>
        ))}
      </div>
      <div style={{ display:'flex', gap:'20px', paddingTop:'12px', borderTop:`1px solid var(--border)` }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ display:'flex', alignItems:'center', gap:'6px', fontFamily:'Space Mono,monospace', fontSize:'0.62rem', color:'var(--text-2)', textDecoration:'none', letterSpacing:'0.04em', transition:'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color='var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color='var(--text-2)')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GITHUB
        </a>
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            style={{ display:'flex', alignItems:'center', gap:'6px', fontFamily:'Space Mono,monospace', fontSize:'0.62rem', color:'var(--text-2)', textDecoration:'none', letterSpacing:'0.04em', transition:'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color='var(--yellow)')}
            onMouseLeave={e => (e.currentTarget.style.color='var(--text-2)')}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            LIVE DEMO
          </a>
        )}
      </div>
    </div>
  )
}
