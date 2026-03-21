import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-bg">
      <div className="container">
        <div className="section-header">
          <span className="badge fade-in">Get In Touch</span>
          <h2 className="section-title fade-in">Contact Me</h2>
          <p className="section-subtitle fade-in">
            Have an opportunity or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="fade-in-left">
            <h3 className="contact-info-title">Let's Work Together</h3>
            <p className="contact-info-desc">
              I'm currently open to Senior MIS Executive, Data Analyst, and Business Analyst
              roles. Whether you have a project, opportunity, or just want to connect — my
              inbox is always open!
            </p>

            <div className="contact-items">
              {[
                { icon: 'fas fa-phone',     label: 'Phone',    value: '+91 9369947337' },
                { icon: 'fas fa-envelope',  label: 'Email',    value: 'indrajeetyadav708150@gmail.com' },
                { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'New Delhi, India' },
                { icon: 'fab fa-linkedin',  label: 'LinkedIn', value: 'linkedin.com/in/indrajeet-yadav-a6b51b270' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="contact-item">
                  <div className="contact-item-icon"><i className={icon} /></div>
                  <div>
                    <div className="contact-item-label">{label}</div>
                    <div className="contact-item-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/indrajeet-yadav-a6b51b270" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="mailto:indrajeetyadav708150@gmail.com" className="social-link" title="Email">
                <i className="fas fa-envelope" />
              </a>
              <a href="tel:+919369947337" className="social-link" title="Phone">
                <i className="fas fa-phone" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="fade-in-right">
            <div className="contact-form">
              {status === 'success' ? (
                <div className="form-success" style={{ display: 'block' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }} />
                  <strong>Message Sent Successfully!</strong>
                  <p style={{ marginTop: '0.5rem', color: '#6B8FA8', fontSize: '0.9rem' }}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setStatus(null)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name" name="name" type="text"
                        placeholder="John Doe"
                        value={form.name} onChange={handleChange}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email" name="email" type="email"
                        placeholder="john@example.com"
                        value={form.email} onChange={handleChange}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject...</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Data Analytics Help">Data Analytics Help</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <span className="form-error">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message} onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginBottom: '1rem' }}>
                      <i className="fas fa-exclamation-circle" style={{ marginRight: '0.4rem' }} />
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading'}>
                    {status === 'loading'
                      ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
                      : <><i className="fas fa-paper-plane" /> Send Message</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
