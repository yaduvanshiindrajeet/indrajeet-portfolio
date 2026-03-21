const express = require('express');
const router = express.Router();

const SYSTEM_PROMPT = `You are an AI assistant for Indrajeet Yadav's portfolio website. Answer questions about Indrajeet professionally and concisely in 2-3 sentences max.

Key facts:
- Name: Indrajeet Yadav, MIS Executive at Jeena Sikho Lifecare Limited (Nov 2025 - Present)
- Location: New Delhi, India | Experience: 2+ years
- Email: indrajeetyadav708150@gmail.com | Phone: +91 9369947337
- LinkedIn: linkedin.com/in/indrajeet-yadav-a6b51b270
- Skills: Advanced Excel, SQL, Power BI, Python (Pandas, NumPy), Google Sheets, HR Analytics, Sales Analytics, MIS Reporting, React.js, Node.js, MongoDB
- Previous: Data Analytics Trainer at S&H HighTech Solutions (Jan 2024 - Oct 2025) — trained 70+ students
- Intern: MERN Stack at Hanumant Technology Pvt. Ltd. (May-Nov 2023), Certificate ID: HT11745
- Education: B.A. from Dr. Ram Manohar Lohiya Avadh University, Ayodhya (2025)
- Projects: Sales Dashboard (Power BI), HR Analytics System, Google Sheets Automation, Student Tracker, Python Data Pipeline, SQL MIS System
- Status: Open to Work — Senior MIS Executive, Data Analyst, Business Analyst roles
- Portfolio: indrajeet-portfolio.onrender.com

Keep answers short, friendly and professional. If asked something unrelated to Indrajeet, politely redirect.`;

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    const data = await response.json();
    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }
    res.json({ reply: data.content?.[0]?.text || 'Sorry, could not process that.' });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
