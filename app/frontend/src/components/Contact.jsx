import React, { useState } from 'react';
import { MY_DATA } from '../data/mock';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", { id: toastId, duration: 4000 });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.error || "Failed to send message.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error. Please try again or email me directly.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="section container" 
      style={{ paddingBottom: '5rem' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // contact
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Get In Touch
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px' }}>
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </div>

      <div className="contact-layout">
        
        {/* Form Column */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name <span style={{color:'var(--accent-primary)'}}>*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your name" 
                disabled={isSubmitting} 
              />
            </div>
            <div className="form-group">
              <label>Email <span style={{color:'var(--accent-primary)'}}>*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="your@email.com" 
                disabled={isSubmitting} 
              />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label>Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="What's this about?" 
              disabled={isSubmitting} 
            />
          </div>
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label>Message <span style={{color:'var(--accent-primary)'}}>*</span></label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Tell me about your project or just say hi..." 
              rows="5" 
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button type="submit" className="btn-send" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>
        </form>

        {/* Info Column */}
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon"><Mail size={20} /></div>
            <div className="contact-details">
              <span>Email</span>
              <p>{MY_DATA.personalInfo.email}</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><Phone size={20} /></div>
            <div className="contact-details">
              <span>Phone</span>
              <p>{MY_DATA.personalInfo.phone}</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><MapPin size={20} /></div>
            <div className="contact-details">
              <span>Location</span>
              <p>Gujarat, India</p>
            </div>
          </div>

          <div className="follow-me" style={{ marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Find me on</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={MY_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="social-box">
                <FiGithub size={20} />
              </a>
              <a href={MY_DATA.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-box">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${MY_DATA.personalInfo.email}`} className="social-box">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (min-width: 768px) {
          .contact-layout { grid-template-columns: 1.2fr 1fr; gap: 4rem; }
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 540px) {
          .form-row { grid-template-columns: 1fr 1fr; }
        }
        .form-group label {
          display: block;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: rgba(161,161,170,0.5);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: rgba(20, 184, 166, 0.5);
          background: rgba(24, 24, 27, 1);
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.08);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .btn-send {
          background: var(--accent-primary);
          color: #000;
          border: none;
          padding: 0.85rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          width: 100%;
          justify-content: center;
        }
        @media (min-width: 540px) {
          .btn-send { width: auto; }
        }
        .btn-send:hover:not(:disabled) {
          background: var(--accent-light);
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .contact-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: border-color 0.3s;
        }
        .contact-card:hover {
          border-color: rgba(20, 184, 166, 0.2);
        }
        .contact-icon {
          width: 44px;
          height: 44px;
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-details span {
          color: var(--text-muted);
          font-size: 0.8rem;
          display: block;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }
        .contact-details p {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
          word-break: break-all;
        }
        .social-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: var(--text-muted);
          transition: all 0.3s;
        }
        .social-box:hover {
          color: var(--accent-primary);
          border-color: rgba(20, 184, 166, 0.3);
          transform: translateY(-2px);
          background: rgba(20, 184, 166, 0.05);
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;