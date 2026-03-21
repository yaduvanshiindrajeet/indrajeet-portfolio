import { useState, useRef, useEffect } from 'react'

const suggestions = [
  "What are your skills?",
  "Tell me about experience",
  "Which projects you made?",
  "Are you open to work?",
]

// Smart rule-based responses
function getSmartReply(input) {
  const q = input.toLowerCase()

  if (q.match(/skill|know|tech|tool|excel|python|sql|power.?bi|language/))
    return "Indrajeet is proficient in Advanced Excel, SQL, Power BI, Python (Pandas, NumPy), Google Sheets, MIS Reporting, HR Analytics, and Sales Analytics. He also knows React.js, Node.js, and MongoDB from his MERN Stack internship! 💪"

  if (q.match(/experience|work|job|company|jeena|hightech|intern/))
    return "Indrajeet has 2+ years of experience:\n\n• MIS Executive at Jeena Sikho Lifecare Limited (Nov 2025–Present)\n• Data Analytics Trainer at S&H HighTech Solutions (Jan 2024–Oct 2025) — trained 70+ students\n• MERN Stack Intern at Hanumant Technology (May–Nov 2023)"

  if (q.match(/project|dashboard|mis|sales|hr|python script|automation/))
    return "Indrajeet's key projects:\n\n📊 Sales Performance Dashboard (Power BI)\n👥 HR Analytics System (Excel + SQL)\n🤖 Python Data Automation Pipeline\n📋 Google Sheets + Forms Integration\n🎓 Student Analytics Tracker\n🗄️ SQL MIS Reporting System"

  if (q.match(/open|work|hire|job|opportunit|available|looking|role|position/))
    return "Yes! Indrajeet is actively Open to Work! 🟢\n\nHe's looking for:\n• Senior MIS Executive\n• Data Analyst\n• Business Analyst\n\n📧 indrajeetyadav708150@gmail.com\n📱 +91 9369947337"

  if (q.match(/contact|email|phone|reach|linkedin|connect/))
    return "You can reach Indrajeet here:\n\n📧 indrajeetyadav708150@gmail.com\n📱 +91 9369947337\n🔗 linkedin.com/in/indrajeet-yadav-a6b51b270\n📍 New Delhi, India\n\nOr use the Contact form on this page! 😊"

  if (q.match(/education|study|college|university|degree|qualification/))
    return "Indrajeet holds a Bachelor of Arts (B.A.) from Dr. Ram Manohar Lohiya Avadh University, Ayodhya (2025). He also completed a MERN Stack internship certification (ID: HT11745) from Hanumant Technology Pvt. Ltd."

  if (q.match(/certif|course|training/))
    return "Indrajeet's certifications:\n\n🌐 MERN Stack — Hanumant Technology (ID: HT11745)\n📊 Data Analytics Trainer — HighTech Solutions\n📈 Power BI — DAX & Dashboards\n🐍 Python for Data Science\n☁️ Google Workspace Advanced\n🗄️ SQL Advanced Querying"

  if (q.match(/salary|ctc|pay|package/))
    return "For salary and package discussions, please reach out directly:\n\n📧 indrajeetyadav708150@gmail.com\n📱 +91 9369947337\n\nIndrajeet is open to discuss based on the role and company! 😊"

  if (q.match(/student|train|teach|mentor|70/))
    return "At S&H HighTech Solutions, Indrajeet trained 70+ students in Data Analytics — covering Advanced Excel, SQL, Power BI & Python. Many of his students successfully landed analytics jobs! 🎓"

  if (q.match(/location|city|delhi|india|where|based/))
    return "Indrajeet is based in New Delhi, India 📍 He is open to both on-site roles in Delhi/NCR and remote opportunities across India!"

  if (q.match(/power.?bi|dashboard|dax|visualization|report/))
    return "Indrajeet is skilled in Power BI — creating interactive dashboards with DAX, data modeling, KPI reports, slicers & drill-through features. He has built end-to-end dashboards for sales and HR analytics! 📊"

  if (q.match(/python|pandas|numpy|matplotlib|automation/))
    return "Indrajeet uses Python at intermediate level — primarily Pandas & NumPy for data wrangling, Matplotlib & Seaborn for visualization, and automation scripts for data pipelines. He reduced manual work by ~60% using Python! 🐍"

  if (q.match(/hi|hello|hey|namaste|hii/))
    return "Hello! 👋 I'm Indrajeet's AI assistant. I can tell you about his skills, experience, projects, or how to contact him. What would you like to know? 😊"

  if (q.match(/who|about|introduce|tell me about indrajeet|yourself/))
    return "Indrajeet Yadav is a results-driven MIS Executive & Data Analytics professional from New Delhi with 2+ years of experience. He specializes in transforming raw data into actionable business insights using Excel, SQL, Power BI & Python. He has trained 70+ students and built end-to-end data solutions! 🚀"

  if (q.match(/resume|cv|download/))
    return "You can download Indrajeet's resume from the 'Resume Download' section on this page — just scroll down! 📄 Or contact him directly at indrajeetyadav708150@gmail.com"

  if (q.match(/mern|react|node|mongo|web|fullstack|full.stack/))
    return "Indrajeet completed a 6-month MERN Stack internship at Hanumant Technology Pvt. Ltd. (May–Nov 2023). He built React.js apps, Node.js APIs, and worked with MongoDB. Certificate ID: HT11745 🌐"

  return "Great question! I'm not sure about that specific detail. For more information, please:\n\n📧 Email: indrajeetyadav708150@gmail.com\n📱 Call: +91 9369947337\n🔗 LinkedIn: linkedin.com/in/indrajeet-yadav-a6b51b270\n\nOr use the Contact form on this page! 😊"
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! 👋 I'm Indrajeet's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const send = (text) => {
    const userText = (text || input).trim()
    if (!userText || loading) return
    setMessages(prev => [...prev, { role: 'user', content: userText }])
    setInput('')
    setLoading(true)
    setTimeout(() => {
      const reply = getSmartReply(userText)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
      setLoading(false)
    }, 700)
  }

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }

  return (
    <>
      <button onClick={() => setOpen(!open)} style={{
        position: 'fixed', bottom: '2rem', right: '1.5rem', zIndex: 9999,
        width: '58px', height: '58px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
        border: 'none', cursor: 'pointer',
        fontSize: '1.4rem', boxShadow: '0 8px 32px rgba(46,134,193,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.3s', animation: open ? 'none' : 'chatPulse 2s infinite'
      }}>
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: '6rem', right: '1.5rem', zIndex: 9998,
          width: 'min(340px, calc(100vw - 3rem))',
          background: '#0D2137',
          border: '1px solid rgba(46,134,193,0.3)', borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '0.9rem 1.2rem',
            background: 'linear-gradient(135deg, rgba(46,134,193,0.25), rgba(26,188,156,0.15))',
            borderBottom: '1px solid rgba(46,134,193,0.2)',
            display: 'flex', alignItems: 'center', gap: '0.8rem'
          }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #2E86C1, #1ABC9C)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'
            }}>🤖</div>
            <div>
              <div style={{ color: '#fff', fontWeight: '700', fontSize: '0.9rem' }}>Ask about Indrajeet</div>
              <div style={{ color: '#1ABC9C', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1ABC9C', display: 'inline-block', animation: 'blink2 1.5s infinite' }} />
                Online · Instant Reply
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            overflowY: 'auto', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
            maxHeight: '300px', minHeight: '150px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '88%', padding: '0.6rem 0.95rem',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #2E86C1, #1ABC9C)'
                    : 'rgba(255,255,255,0.06)',
                  border: msg.role === 'assistant' ? '1px solid rgba(46,134,193,0.2)' : 'none',
                  color: '#fff', fontSize: '0.82rem', lineHeight: '1.6',
                  whiteSpace: 'pre-line'
                }}>{msg.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', gap: '5px', padding: '0.3rem 0.5rem', alignItems: 'center' }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: '7px', height: '7px', borderRadius: '50%', background: '#2E86C1',
                    animation: `dotBounce 1s infinite ${i * 0.18}s`
                  }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div style={{ padding: '0 0.8rem 0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {suggestions.map(s => (
                <button key={s} onClick={() => send(s)} style={{
                  fontSize: '0.7rem', padding: '0.3rem 0.75rem', borderRadius: '20px',
                  background: 'rgba(46,134,193,0.1)', border: '1px solid rgba(46,134,193,0.35)',
                  color: '#AED6F1', cursor: 'pointer', transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => { e.target.style.background = 'rgba(46,134,193,0.25)' }}
                onMouseLeave={e => { e.target.style.background = 'rgba(46,134,193,0.1)' }}
                >{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '0.7rem 0.8rem', borderTop: '1px solid rgba(46,134,193,0.2)',
            display: 'flex', gap: '0.5rem', alignItems: 'center'
          }}>
            <input ref={inputRef}
              value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
              placeholder="Ask about skills, projects..."
              style={{
                flex: 1, background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(46,134,193,0.3)', borderRadius: '20px',
                padding: '0.5rem 1rem', color: '#fff', fontSize: '0.82rem',
                outline: 'none', fontFamily: 'inherit'
              }}
            />
            <button onClick={() => send()} disabled={!input.trim() || loading} style={{
              width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
              background: input.trim() ? 'linear-gradient(135deg, #2E86C1, #1ABC9C)' : 'rgba(255,255,255,0.08)',
              border: 'none', cursor: input.trim() ? 'pointer' : 'default',
              color: '#fff', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
            }}>➤</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatPulse { 0%,100% { box-shadow: 0 8px 32px rgba(46,134,193,0.5); } 50% { box-shadow: 0 8px 48px rgba(26,188,156,0.8); transform: scale(1.05); } }
        @keyframes dotBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes blink2 { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
        @media (max-width: 480px) {
          .chat-window { width: calc(100vw - 2rem) !important; right: 1rem !important; }
        }
      `}</style>
    </>
  )
}
