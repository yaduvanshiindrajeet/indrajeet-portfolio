const skillCategories = [
  {
    icon: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png',
    name: 'Data Analysis',
    level: 95,
    color: '#1ABC9C',
    skills: ['Advanced Excel', 'Pivot Tables', 'VLOOKUP', 'INDEX-MATCH', 'Power Query', 'Macros', 'Conditional Formatting'],
    teal: false,
  },
  {
    icon: 'https://img.icons8.com/color/48/sql.png',
    name: 'Database & SQL',
    level: 85,
    color: '#2E86C1',
    skills: ['MySQL', 'SQL Joins', 'Subqueries', 'Stored Procedures', 'Window Functions', 'Query Optimization', 'Aggregations'],
    teal: false,
  },
  {
    icon: 'https://img.icons8.com/color/48/power-bi.png',
    name: 'Data Visualization',
    level: 88,
    color: '#F39C12',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'KPI Dashboards', 'Interactive Reports', 'Slicers', 'Google Data Studio'],
    teal: true,
  },
  {
    icon: 'https://img.icons8.com/color/48/python--v1.png',
    name: 'Programming',
    level: 75,
    color: '#3498DB',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Wrangling', 'Automation Scripts'],
    teal: true,
  },
  {
    icon: 'https://img.icons8.com/color/48/react-native.png',
    name: 'Web Development (MERN)',
    level: 70,
    color: '#61DAFB',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
    teal: false,
  },
  {
    icon: 'https://img.icons8.com/color/48/google-sheets.png',
    name: 'Google Tools & Others',
    level: 90,
    color: '#27AE60',
    skills: ['Google Sheets', 'Google Forms', 'HR Analytics', 'Sales Analytics', 'MIS Reporting', 'C/C++', 'Core Java'],
    teal: true,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-bg">
      <div className="container">
        <div className="section-header">
          <span className="badge fade-in">My Toolkit</span>
          <h2 className="section-title fade-in">Technical Skills</h2>
          <p className="section-subtitle fade-in">Technologies and tools I work with daily</p>
        </div>
        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
            <div key={cat.name} className="skill-category-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  <img src={cat.icon} alt={cat.name} style={{ width: '28px', height: '28px' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="skill-cat-name">{cat.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${cat.level}%`, background: `linear-gradient(90deg, ${cat.color}, #1ABC9C)`, borderRadius: '2px', transition: 'width 1s ease' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: cat.color, fontWeight: 700, minWidth: '32px' }}>{cat.level}%</span>
                  </div>
                </div>
              </div>
              <div className="skill-items">
                {cat.skills.map(skill => (
                  <span key={skill} className={`skill-tag${cat.teal ? ' teal' : ''}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
