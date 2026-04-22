'use client'
import { useTheme } from './ThemeContext'

const SKILLS = [
  { label: 'Python',    size: 88, top: '8%',  left: '8%',  delay: '0s',    dur: '4s'   },
  { label: 'SQL',       size: 74, top: '8%',  left: '72%', delay: '0.5s',  dur: '5s'   },
  { label: 'ML',        size: 80, top: '30%', left: '40%', delay: '0.8s',  dur: '4.5s' },
  { label: 'Pandas',    size: 70, top: '55%', left: '12%', delay: '1.2s',  dur: '6s'   },
  { label: 'Power BI',  size: 76, top: '55%', left: '68%', delay: '0.3s',  dur: '3.8s' },
  { label: 'Streamlit', size: 82, top: '78%', left: '30%', delay: '1.5s',  dur: '5.5s' },
  { label: 'Git',       size: 66, top: '78%', left: '62%', delay: '0.7s',  dur: '4.2s' },
  { label: 'Next.js',   size: 72, top: '30%', left: '78%', delay: '1s',    dur: '4.8s' },
]

export default function FloatingOrbs() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div style={{ position: 'relative', height: '360px', width: '100%', marginTop: '40px' }}>
      {SKILLS.map((s, i) => {
        const isYellow = i % 3 === 0
        const isBorder = i % 3 === 1
        const bg    = isYellow ? '#F5C518' : isBorder ? 'transparent' : isDark ? '#222' : '#111'
        const color = isYellow ? '#111' : isBorder ? (isDark ? '#F5C518' : '#111') : '#fff'
        const border = isBorder ? `2px solid ${isDark ? '#F5C518' : '#111'}` : 'none'

        return (
          <div
            key={s.label}
            style={{
              position: 'absolute',
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              background: bg,
              border,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              fontWeight: 700,
              color,
              letterSpacing: '0.04em',
              textAlign: 'center',
              padding: '8px',
              animation: `orbFloat${(i % 3) + 1} ${s.dur} ease-in-out ${s.delay} infinite`,
              boxShadow: isYellow
                ? '0 8px 24px rgba(245,197,24,0.35)'
                : isDark
                  ? '0 8px 20px rgba(0,0,0,0.4)'
                  : '0 8px 20px rgba(0,0,0,0.12)',
              cursor: 'default',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              userSelect: 'none',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'scale(1.18)'
              el.style.boxShadow = '0 16px 40px rgba(245,197,24,0.4)'
              el.style.zIndex = '10'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'scale(1)'
              el.style.boxShadow = isYellow
                ? '0 8px 24px rgba(245,197,24,0.35)'
                : isDark ? '0 8px 20px rgba(0,0,0,0.4)' : '0 8px 20px rgba(0,0,0,0.12)'
              el.style.zIndex = '1'
            }}
          >
            {s.label}
          </div>
        )
      })}

      <style>{`
        @keyframes orbFloat1 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes orbFloat3 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-18px) rotate(3deg); }
        }
        @media (max-width: 480px) {
          .orbs-wrap { height: 460px !important; }
        }
      `}</style>
    </div>
  )
}
