'use client'
export default function Footer() {
  return (
    <footer style={{ padding:'28px 40px', borderTop:'1px solid #1a1a1a', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', background:'#0A0A0A' }}>
      <span style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1.1rem', color:'#fff' }}>HA<span style={{ color:'#F5C518' }}>.</span></span>
      <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'#333', letterSpacing:'0.08em' }}>© {new Date().getFullYear()} HARSH AGRAWAL · NEXT.JS</span>
      <a href="#home" style={{ fontFamily:'Space Mono,monospace', fontSize:'0.6rem', color:'#444', textDecoration:'none', letterSpacing:'0.1em', transition:'color 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.color='#F5C518')}
        onMouseLeave={e => (e.currentTarget.style.color='#444')}
      >BACK TO TOP ↑</a>
    </footer>
  )
}
