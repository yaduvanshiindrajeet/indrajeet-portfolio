import { useEffect, useRef, useState } from 'react'
import profilePhoto from '../assets/indrajeet.png'

const roles = ['MIS Executive', 'Data Analyst', 'Power BI Developer', 'SQL Expert', 'Python Developer']

const techStack = [
  { name: 'Excel', icon: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png' },
  { name: 'Power BI', icon: 'https://img.icons8.com/color/48/power-bi.png' },
  { name: 'Python', icon: 'https://img.icons8.com/color/48/python--v1.png' },
  { name: 'SQL', icon: 'https://img.icons8.com/color/48/sql.png' },
  { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
]

export default function Hero() {
  const canvasRef = useRef(null)
  const [roleText, setRoleText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [typing, setTyping] = useState(true)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]
    let t
    if (typing) {
      if (charIdx < current.length) { t = setTimeout(() => setCharIdx(i => i + 1), 80) }
      else { t = setTimeout(() => setTyping(false), 1800) }
    } else {
      if (charIdx > 0) { t = setTimeout(() => setCharIdx(i => i - 1), 40) }
      else { setRoleIdx(i => (i + 1) % roles.length); setTyping(true) }
    }
    setRoleText(current.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, typing, roleIdx])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, particles = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height
        this.r = Math.random() * 1.8 + 0.4; this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4; this.a = Math.random() * 0.4 + 0.1
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(46,134,193,${this.a})`; ctx.fill()
      }
    }
    for (let i = 0; i < 90; i++) particles.push(new Particle())
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(46,134,193,${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} id="particles-canvas" />
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-content" style={{ flex: 1 }}>
          <p className="hero-greeting fade-in">{'<'} Hello, World! {'/>'}</p>
          <h1 className="hero-name fade-in">Indrajeet<br /><span className="gradient-text">Yadav</span></h1>
          <div className="hero-role fade-in" style={{ minHeight: '2.5rem', display: 'flex', alignItems: 'center' }}>
            <span>{roleText}</span>
            <span style={{ borderRight: '2px solid #2E86C1', marginLeft: '2px', animation: 'blink 1s infinite' }}>&nbsp;</span>
          </div>
          <p className="hero-description fade-in">MIS Executive & Data Analytics Professional with 2+ years of experience transforming raw data into actionable business insights using Excel, SQL, Power BI & Python.</p>
          <div className="hero-buttons fade-in">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}><i className="fas fa-folder-open" /> View Projects</button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}><i className="fas fa-envelope" /> Contact Me</button>
            <a href="/resume.pdf" className="btn btn-outline" download><i className="fas fa-download" /> Resume</a>
          </div>

          {/* Tech Stack Logos */}
          <div className="hero-techstack fade-in">
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Tech Stack</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {techStack.map(({ name, icon }) => (
                <div key={name} className="tech-logo-pill">
                  <img src={icon} alt={name} style={{ width: '22px', height: '22px' }} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-stats fade-in">
            {[
              { num: '2+', label: 'Years Experience' },
              { num: '70+', label: 'Students Trained' },
              { num: '6+', label: 'Projects Delivered' },
              { num: '15+', label: 'Tech Skills' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="hero-stat-number">{num}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo-wrapper fade-in-right" style={{ flexShrink: 0 }}>
          <div className="hero-photo-ring">
            <img src={profilePhoto} alt="Indrajeet Yadav" className="hero-photo" />
          </div>
          <div className="hero-photo-badge"><i className="fas fa-circle" style={{ color: '#27AE60', fontSize: '8px', marginRight: '6px' }} />Open to Work</div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <span>Scroll Down</span><i className="fas fa-chevron-down" />
      </div>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        .hero-photo-wrapper{position:relative;display:flex;flex-direction:column;align-items:center;gap:1rem}
        .hero-photo-ring{width:320px;height:320px;border-radius:50%;background:linear-gradient(135deg,#2E86C1,#1ABC9C);padding:4px;box-shadow:0 0 60px rgba(46,134,193,0.3);animation:float 4s ease-in-out infinite}
        .hero-photo{width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:top;border:4px solid #0A1628}
        .hero-photo-badge{background:rgba(13,33,55,0.9);border:1px solid rgba(46,134,193,0.4);backdrop-filter:blur(10px);border-radius:25px;padding:0.5rem 1.2rem;font-size:0.85rem;color:#AED6F1;font-weight:600}
        @keyframes float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-12px)}}
        .tech-logo-pill{display:flex;align-items:center;gap:6px;padding:5px 12px;background:rgba(46,134,193,0.08);border:1px solid rgba(46,134,193,0.2);border-radius:20px;font-size:0.78rem;color:var(--text-secondary);transition:all 0.3s}
        .tech-logo-pill:hover{background:rgba(46,134,193,0.18);border-color:#2E86C1;color:#fff;transform:translateY(-2px)}
        .hero-techstack{margin:1.5rem 0}
        @media(max-width:900px){.hero-photo-wrapper{display:flex!important;order:-1;margin-bottom:1.5rem}.hero-photo-ring{width:180px!important;height:180px!important}}
      `}</style>
    </section>
  )
}
