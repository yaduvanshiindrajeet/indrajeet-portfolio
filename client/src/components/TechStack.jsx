import { useEffect, useRef, useState } from 'react'

const techStack = [
  { name: 'Power BI',     icon: '📊', color: '#F2C811', desc: 'Dashboards & DAX' },
  { name: 'Excel',        icon: '📗', color: '#217346', desc: 'Advanced & Macros' },
  { name: 'Python',       icon: '🐍', color: '#3776AB', desc: 'Pandas & NumPy' },
  { name: 'SQL',          icon: '🗄️', color: '#F29111', desc: 'Queries & Procedures' },
  { name: 'Google Sheets',icon: '📋', color: '#34A853', desc: 'Advanced Formulas' },
  { name: 'React.js',     icon: '⚛️', color: '#61DAFB', desc: 'Frontend Dev' },
  { name: 'Node.js',      icon: '🟢', color: '#339933', desc: 'Backend API' },
  { name: 'MongoDB',      icon: '🍃', color: '#47A248', desc: 'NoSQL Database' },
  { name: 'Data Studio',  icon: '📈', color: '#4285F4', desc: 'Reporting' },
  { name: 'MIS Reports',  icon: '📑', color: '#2E86C1', desc: 'BI & Analytics' },
  { name: 'HR Analytics', icon: '👥', color: '#9B59B6', desc: 'Workforce Data' },
  { name: 'GitHub',       icon: '🐙', color: '#6e5494', desc: 'Version Control' },
]

const stats = [
  { end: 2,  suffix: '+', label: 'Years Experience', icon: '💼' },
  { end: 70, suffix: '+', label: 'Students Trained',  icon: '🎓' },
  { end: 6,  suffix: '+', label: 'Projects Done',     icon: '🚀' },
  { end: 15, suffix: '+', label: 'Tech Skills',       icon: '⚡' },
]

function useCountUp(end, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])
  return count
}

function StatCard({ end, suffix, label, icon, animate }) {
  const count = useCountUp(end, 1200, animate)
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(46,134,193,0.2)',
      borderRadius: '16px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(46,134,193,0.6)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(46,134,193,0.2)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(46,134,193,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
      <div style={{
        fontSize: '2.5rem', fontWeight: '800',
        background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
      }}>{count}{suffix}</div>
      <div style={{ color: '#6B8FA8', fontSize: '0.85rem', marginTop: '0.3rem' }}>{label}</div>
    </div>
  )
}

export default function TechStack() {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #0A1628 0%, #0D2137 100%)'
    }}>
      <div className="container">

        {/* Animated Stats */}
        <div className="section-header">
          <span className="badge fade-in">By The Numbers</span>
          <h2 className="section-title fade-in">Impact & Achievements</h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem', marginBottom: '5rem'
        }}>
          {stats.map(s => <StatCard key={s.label} {...s} animate={animate} />)}
        </div>

        {/* Tech Stack */}
        <div className="section-header">
          <span className="badge fade-in">Tools I Use</span>
          <h2 className="section-title fade-in">Tech Stack</h2>
          <p className="section-subtitle fade-in">Technologies I work with daily</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '1rem'
        }}>
          {techStack.map((tech, i) => (
            <div key={tech.name} className="fade-in" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(46,134,193,0.15)',
                borderRadius: '14px', padding: '1.4rem 1rem',
                textAlign: 'center', cursor: 'default', transition: 'all 0.3s',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'
                e.currentTarget.style.borderColor = tech.color + '80'
                e.currentTarget.style.boxShadow = `0 12px 30px ${tech.color}30`
                e.currentTarget.style.background = tech.color + '15'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = 'rgba(46,134,193,0.15)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
              >
                <div style={{ fontSize: '2.2rem', lineHeight: 1 }}>{tech.icon}</div>
                <div style={{ color: '#AED6F1', fontSize: '0.85rem', fontWeight: '600' }}>{tech.name}</div>
                <div style={{ color: '#6B8FA8', fontSize: '0.73rem' }}>{tech.desc}</div>
                <div style={{
                  position: 'absolute', top: '8px', right: '8px',
                  width: '7px', height: '7px', borderRadius: '50%', background: tech.color
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
