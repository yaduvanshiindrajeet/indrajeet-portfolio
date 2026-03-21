const projects = [
  {
    icon: '📊',
    title: 'Sales Performance Dashboard',
    desc: 'End-to-end Power BI dashboard tracking monthly sales KPIs, revenue vs target, regional performance and YoY trends for management at Jeena Sikho Lifecare Limited.',
    tags: ['Power BI', 'DAX', 'SQL', 'Excel'],
  },
  {
    icon: '👥',
    title: 'HR Data Analysis System',
    desc: 'Comprehensive HR reporting system covering employee attendance, leave tracking, payroll summaries and performance metrics with automated monthly reports.',
    tags: ['Excel', 'SQL', 'Power Query', 'MIS'],
  },
  {
    icon: '🤖',
    title: 'Google Sheets Automation',
    desc: 'Collaborative dashboards integrated with Google Forms for real-time data collection and automated reporting, reducing manual data entry by ~50%.',
    tags: ['Google Sheets', 'Google Forms', 'Data Studio'],
  },
  {
    icon: '🎓',
    title: 'Student Analytics Tracker',
    desc: 'Automated Excel tracker to monitor 70+ students\' progress, batch performance, attendance and placement outcomes at HighTech Solutions.',
    tags: ['Excel', 'Pivot Tables', 'Macros', 'Charts'],
  },
  {
    icon: '🐍',
    title: 'Data Cleaning Pipeline',
    desc: 'Python-based automation pipeline using Pandas and NumPy to clean, transform and preprocess large datasets, reducing manual effort by ~60%.',
    tags: ['Python', 'Pandas', 'NumPy', 'Automation'],
  },
  {
    icon: '🗄️',
    title: 'SQL MIS Reporting System',
    desc: 'Complex SQL queries and stored procedures to automate daily/weekly MIS reports with high accuracy, consistency and fast execution.',
    tags: ['SQL', 'Stored Procedures', 'MySQL', 'MIS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-bg">
      <div className="container">
        <div className="section-header">
          <span className="badge fade-in">My Work</span>
          <h2 className="section-title fade-in">Featured Projects</h2>
          <p className="section-subtitle fade-in">Real-world data projects and solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="project-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
