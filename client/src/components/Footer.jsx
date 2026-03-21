const year = new Date().getFullYear()

const footerLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-name">Indrajeet Yadav</div>
        <div className="footer-role">MIS Executive  ·  Data Analyst  ·  Power BI Developer</div>

        <nav className="footer-links">
          {footerLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={e => { e.preventDefault(); scrollTo(link) }}>
              {link}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            { href: 'https://linkedin.com/in/indrajeet-yadav-a6b51b270', icon: 'fab fa-linkedin-in' },
            { href: 'mailto:indrajeetyadav708150@gmail.com',               icon: 'fas fa-envelope' },
            { href: 'https://github.com/',                                  icon: 'fab fa-github' },
          ].map(({ href, icon }) => (
            <a key={icon} href={href} target="_blank" rel="noreferrer"
              className="social-link" style={{ width: 38, height: 38, fontSize: '0.95rem' }}>
              <i className={icon} />
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © {year} Indrajeet Yadav · Built with <span>❤</span> using React + Node.js + MongoDB
        </p>
      </div>
    </footer>
  )
}
