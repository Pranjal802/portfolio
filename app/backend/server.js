require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS — allow both local dev and production frontend
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json({ limit: '10kb' }));

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

// Simple sanitize — strip HTML tags to prevent injection
const sanitize = (str) => String(str).replace(/<[^>]*>?/gm, '').trim();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const cleanName    = sanitize(name).substring(0, 100);
    const cleanEmail   = sanitize(email).substring(0, 200);
    const cleanSubject = sanitize(subject || 'No Subject').substring(0, 200);
    const cleanMessage = sanitize(message).substring(0, 2000);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['patelpranjalinfo6@gmail.com'],
      replyTo: cleanEmail,
      subject: `[Portfolio] ${cleanSubject} — from ${cleanName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background:#09090b; color:#fafafa; margin:0; padding:0; }
            .wrapper { max-width:600px; margin:0 auto; }
            .header { background:linear-gradient(135deg,#14b8a6,#0d9488); padding:2rem; text-align:center; border-radius:12px 12px 0 0; }
            .header h1 { margin:0; font-size:1.5rem; color:#000; }
            .header p { margin:0.5rem 0 0; color:rgba(0,0,0,0.6); font-size:0.9rem; }
            .body { background:#111113; padding:2rem; }
            .field { margin-bottom:1.5rem; }
            .label { font-size:0.75rem; font-weight:600; color:#14b8a6; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.4rem; }
            .value { background:#18181b; border:1px solid #27272a; border-radius:8px; padding:0.8rem 1rem; color:#fafafa; font-size:0.95rem; white-space:pre-wrap; word-break:break-word; }
            .footer { background:#09090b; padding:1.5rem 2rem; border-radius:0 0 12px 12px; text-align:center; border-top:1px solid #27272a; }
            .footer p { margin:0; color:#71717a; font-size:0.8rem; }
            .footer a { color:#14b8a6; text-decoration:none; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>📬 New Portfolio Message</h1>
              <p>Someone reached out through your portfolio contact form</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${cleanName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${cleanEmail}" style="color:#14b8a6;text-decoration:none">${cleanEmail}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${cleanSubject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${cleanMessage}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent via <a href="https://pranjal-portfolio.vercel.app">Pranjal's Portfolio</a> &bull; ${new Date().toUTCString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
