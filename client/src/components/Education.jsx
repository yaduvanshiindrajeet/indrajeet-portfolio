const certifications = [
  { icon: '🌐', name: 'Full-Stack Web Dev – MERN Stack', issuer: 'Hanumant Technology Pvt. Ltd. · ID: HT11745 · 2023' },
  { icon: '📊', name: 'Data Analytics Trainer Certification', issuer: 'HighTech Solutions · Excel, SQL, Power BI, Python · 2024' },
  { icon: '📈', name: 'Power BI – DAX & Dashboard Development', issuer: 'Self-Certified · Power BI Professional' },
  { icon: '🐍', name: 'Python for Data Science – Intermediate', issuer: 'Pandas, NumPy, Matplotlib, Seaborn' },
  { icon: '☁️', name: 'Google Workspace – Advanced Level', issuer: 'Google Sheets, Forms & Data Studio' },
  { icon: '🗄️', name: 'SQL – Advanced Querying & Optimization', issuer: 'Stored Procedures, Window Functions, Indexing' },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge fade-in">Background</span>
          <h2 className="section-title fade-in">Education &amp; Certifications</h2>
          <p className="section-subtitle fade-in">Academic foundation and professional credentials</p>
        </div>
        <div className="edu-cert-grid">
          {/* Education */}
          <div className="fade-in-left">
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#AED6F1', marginBottom: '1.5rem' }}>
              <i className="fas fa-graduation-cap" style={{ color: '#2E86C1', marginRight: '0.6rem' }} />
              Education
            </h3>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div className="edu-degree">Bachelor of Arts (B.A.)</div>
              <div className="edu-university">
                Dr. Ram Manohar Lohiya Avadh University
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6B8FA8', marginBottom: '0.4rem' }}>
                Ayodhya, Uttar Pradesh
              </div>
              <div className="edu-year">
                <i className="far fa-calendar-alt" style={{ marginRight: '0.4rem' }} />
                Passed Out: 2025
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#AED6F1', marginBottom: '1rem' }}>
                <i className="fas fa-code" style={{ color: '#1ABC9C', marginRight: '0.6rem' }} />
                Additional Training
              </h3>
              <div className="edu-card">
                <div className="edu-degree">Full-Stack MERN Internship</div>
                <div className="edu-university">Hanumant Technology Pvt. Ltd.</div>
                <div style={{ fontSize: '0.85rem', color: '#6B8FA8', marginBottom: '0.4rem' }}>Lucknow, Uttar Pradesh</div>
                <div className="edu-year">May 2023 – Nov 2023 · 6 Months</div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#76D7C4' }}>
                  <i className="fas fa-certificate" style={{ marginRight: '0.4rem' }} />
                  Certificate ID: HT11745 · ISO-9001:2015
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-in-right">
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#AED6F1', marginBottom: '1.5rem' }}>
              <i className="fas fa-certificate" style={{ color: '#1ABC9C', marginRight: '0.6rem' }} />
              Certifications
            </h3>
            <div className="certs-list">
              {certifications.map((cert, i) => (
                <div key={i} className="cert-item fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="cert-icon">{cert.icon}</div>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
