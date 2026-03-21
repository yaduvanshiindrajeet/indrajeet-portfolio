import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Education',   href: '#education' },
  { label: 'Contact',     href: '#contact', cta: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a className="nav-logo" href="#" onClick={e => handleNav(e, '#')}>IY</a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ label, href, cta }) => (
            <a
              key={href}
              href={href}
              className={`${cta ? 'nav-cta' : ''}${active === href.slice(1) ? ' active' : ''}`}
              onClick={e => handleNav(e, href)}
            >{label}</a>
          ))}
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
