import React from 'react';
import { MY_DATA } from '../data/mock';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="section container" 
      style={{ paddingBottom: '5rem' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // contact
        </p>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Get In Touch
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px' }}>
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
        
        {/* Form Column */}
        <div className="contact-form">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." rows="5"></textarea>
          </div>
          <button className="btn-send">
            Send Message <Send size={16} />
          </button>
        </div>

        {/* Info Column */}
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={20} />
            </div>
            <div className="contact-details">
              <span>Email</span>
              <p>{MY_DATA.personalInfo.email}</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={20} />
            </div>
            <div className="contact-details">
              <span>Phone</span>
              <p>{MY_DATA.personalInfo.phone}</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={20} />
            </div>
            <div className="contact-details">
              <span>Location</span>
              <p>India</p>
            </div>
          </div>

          <div className="follow-me" style={{ marginTop: '2.5rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Follow me</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={MY_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="social-box">
                <FiGithub size={20} />
              </a>
              <a href={MY_DATA.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-box">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="social-box">
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
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
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          transition: all 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: rgba(20, 184, 166, 0.5);
          background: rgba(24, 24, 27, 1);
        }
        .btn-send {
          background: var(--accent-primary);
          color: #000;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.3s;
        }
        .btn-send:hover {
          opacity: 0.9;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
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
          font-size: 0.85rem;
          display: block;
          margin-bottom: 0.25rem;
        }
        .contact-details p {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 1rem;
        }
        .social-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          color: var(--text-muted);
          transition: all 0.3s;
        }
        .social-box:hover {
          color: var(--accent-primary);
          border-color: rgba(20, 184, 166, 0.3);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .contact-form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;