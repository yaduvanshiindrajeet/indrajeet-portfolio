const experiences = [
  {
    title: 'MIS Executive',
    company: 'Jeena Sikho Lifecare Limited',
    logo: 'https://img.icons8.com/color/48/organization.png',
    location: 'New Delhi',
    date: 'Nov 2025 – Present',
    current: true,
    bullets: [
      'Sales Data Analysis — revenue tracking, target vs actuals, regional performance & trend forecasting',
      'HR Data Analysis & Management — attendance, payroll data, employee performance reports',
      'Design interactive Power BI dashboards for management decision-making',
      'Automate reports using Advanced Excel (Pivot Tables, VLOOKUP, Power Query, Macros)',
      'Google Sheets + Google Forms for real-time data collection workflows',
      'SQL queries for trend analysis, anomaly detection, and MIS automation',
      'Python scripts for data extraction, cleaning, and transformation tasks',
    ],
    tags: ['Power BI', 'SQL', 'Excel', 'Python', 'HR Analytics', 'Sales Analytics'],
  },
  {
    title: 'Data Analytics Trainer',
    company: 'HighTech Solutions Computer Training Institute',
    logo: 'https://img.icons8.com/color/48/classroom.png',
    location: 'New Delhi',
    date: 'Jan 2024 – Nov 2025',
    current: false,
    bullets: [
      'Trained 70+ students in Advanced Excel, SQL, Power BI, and Python',
      'Designed real-world project-based curriculum for data analytics',
      'Mentored students in building dashboards and analytical reports',
      'Conducted SQL sessions: joins, subqueries, stored procedures & aggregations',
      'Strong student placement outcomes in analytics roles',
      'Created learning materials, assessments, and project assignments',
    ],
    tags: ['Excel', 'SQL', 'Power BI', 'Python', 'Training', 'Curriculum'],
  },
  {
    title: 'Full-Stack Web Development Intern (MERN)',
    company: 'Hanumant Technology Pvt. Ltd.',
    logo: 'https://img.icons8.com/color/48/web.png',
    location: 'Lucknow',
    date: 'May 2023 – Nov 2023',
    current: false,
    bullets: [
      '6-month certified internship — MERN Stack (MongoDB, Express.js, React.js, Node.js)',
      'Built responsive web applications with React.js and component-based architecture',
      'Developed RESTful APIs and backend services using Node.js + Express.js',
      'MongoDB for database design, CRUD operations, and data management',
      'Certificate ID: HT11745 | ISO-9001:2015 Certified Institute',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge fade-in">Work History</span>
          <h2 className="section-title fade-in">Professional Experience</h2>
          <p className="section-subtitle fade-in">My journey in data & technology</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="timeline-item">
              <div className={`timeline-content fade-in${i % 2 === 0 ? '-left' : '-right'}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="timeline-card">
                  {/* Company header with logo */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', background: 'rgba(46,134,193,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <img src={exp.logo} alt={exp.company} style={{ width: '28px', height: '28px' }} />
                    </div>
                    <div>
                      <div className="timeline-job-title" style={{ marginBottom: '2px' }}>
                        {exp.title}
                        {exp.current && <span className="timeline-current">● Current</span>}
                      </div>
                      <div className="timeline-company">
                        <i className="fas fa-building" style={{ marginRight: '0.4rem', fontSize: '0.8rem' }} />
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                  <ul className="timeline-bullets" style={{ marginTop: '1rem' }}>
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '0.72rem', padding: '3px 10px', background: 'rgba(46,134,193,0.1)', border: '1px solid rgba(46,134,193,0.25)', borderRadius: '20px', color: '#7FB3D3', fontFamily: 'monospace' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="timeline-dot"><div className="timeline-dot-inner" /></div>
              <div className="timeline-empty" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
