import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import ResumeDownload from './components/ResumeDownload'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'

function App() {
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el))

    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(Math.min(pct, 100))
    }
    window.addEventListener('scroll', onScroll)
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}

export default App
