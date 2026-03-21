import profilePhoto from '../assets/indrajeet.png'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* Left — Image */}
          <div className="fade-in-left">
            <div className="about-image-wrapper">
              <div className="about-image-box" style={{
                borderRadius: '50%',
                width: '320px', height: '320px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
                padding: '4px',
                boxShadow: '0 0 60px rgba(46,134,193,0.25)',
              }}>
                <img
                  src={profilePhoto}
                  alt="Indrajeet Yadav"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'top center',
                    borderRadius: '50%',
                    border: '4px solid #0A1628',
                  }}
                />
              </div>
              <div className="about-experience-badge">
                <span className="num">2+</span>
                Years Experience
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="about-text fade-in-right">
            <span className="badge">About Me</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Passionate About Data &amp; Analytics
            </h2>
            <p>Hi! I'm <strong style={{ color: '#AED6F1' }}>Indrajeet Yadav</strong>, a results-driven MIS Executive and Data Analytics professional based in New Delhi, India. I specialize in transforming complex data into clear, actionable insights that drive business decisions.</p>
            <p>Currently working at <strong style={{ color: '#2E86C1' }}>Jeena Sikho Lifecare Limited</strong> as MIS Executive, handling Sales Data Analysis, HR Data Management, and building interactive Power BI dashboards. Previously, I trained <strong style={{ color: '#1ABC9C' }}>70+ students</strong> in Data Analytics at HighTech Solutions.</p>
            <p>I'm passionate about Data Science and aim to leverage my expertise in SQL, Power BI, and Python to transition into advanced analytics and data science roles.</p>

            <div className="about-info-grid">
              {[
                { label: 'Name',     value: 'Indrajeet Yadav' },
                { label: 'Role',     value: 'MIS Executive' },
                { label: 'Location', value: 'New Delhi, India' },
                { label: 'Email',    value: 'indrajeetyadav708150@gmail.com' },
                { label: 'Phone',    value: '+91 9369947337' },
                { label: 'Status',   value: '🟢 Open to Work' },
              ].map(({ label, value }) => (
                <div key={label} className="about-info-item">
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <a href="https://linkedin.com/in/indrajeet-yadav-a6b51b270" target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <button className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                <i className="fas fa-paper-plane" /> Hire Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
