export default function ResumeDownload() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, rgba(46,134,193,0.08), rgba(26,188,156,0.08))',
      borderTop: '1px solid rgba(46,134,193,0.15)',
      borderBottom: '1px solid rgba(46,134,193,0.15)',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '2rem',
          background: '#0D2137',
          border: '1px solid rgba(46,134,193,0.25)',
          borderRadius: '24px', padding: '3rem',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(46,134,193,0.1), rgba(26,188,156,0.1))'
          }} />
          <div style={{
            position: 'absolute', bottom: '-40px', left: '-40px',
            width: '140px', height: '140px', borderRadius: '50%',
            background: 'rgba(46,134,193,0.06)'
          }} />

          {/* Left — Text */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              My Resume
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: '800', color: '#FFFFFF', marginBottom: '0.8rem'
            }}>
              Interested in Working<br />
              <span style={{
                background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>Together?</span>
            </h2>
            <p style={{ color: '#6B8FA8', fontSize: '1rem', maxWidth: '420px', lineHeight: '1.7', marginBottom: '0' }}>
              Download my complete resume to know more about my experience, skills, and achievements. Let's build something amazing!
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { val: '2+', label: 'Years Exp' },
                { val: '70+', label: 'Students' },
                { val: '15+', label: 'Skills' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div style={{
                    fontSize: '1.5rem', fontWeight: '800',
                    background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                  }}>{val}</div>
                  <div style={{ color: '#6B8FA8', fontSize: '0.8rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1, minWidth: '200px' }}>
            <a
              href="/Indrajeet_Yadav_Resume.pdf"
              download="Indrajeet_Yadav_Resume.pdf"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '1rem 2rem', borderRadius: '50px',
                background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
                color: 'white', fontWeight: '700', fontSize: '1rem',
                textDecoration: 'none', transition: 'all 0.3s',
                boxShadow: '0 8px 30px rgba(46,134,193,0.4)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(46,134,193,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(46,134,193,0.4)' }}
            >
              <i className="fas fa-download" />
              Download Resume (PDF)
            </a>

            <a
              href="https://linkedin.com/in/indrajeet-yadav-a6b51b270"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '1rem 2rem', borderRadius: '50px',
                background: 'transparent',
                border: '1.5px solid rgba(46,134,193,0.5)',
                color: '#AED6F1', fontWeight: '600', fontSize: '0.95rem',
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(46,134,193,0.1)'; e.currentTarget.style.borderColor = '#2E86C1' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(46,134,193,0.5)' }}
            >
              <i className="fab fa-linkedin" />
              View LinkedIn Profile
            </a>

            <a
              href="mailto:indrajeetyadav708150@gmail.com"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                padding: '1rem 2rem', borderRadius: '50px',
                background: 'transparent',
                border: '1.5px solid rgba(26,188,156,0.4)',
                color: '#76D7C4', fontWeight: '600', fontSize: '0.95rem',
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(26,188,156,0.08)'; e.currentTarget.style.borderColor = '#1ABC9C' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(26,188,156,0.4)' }}
            >
              <i className="fas fa-envelope" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
