import React from 'react';
import { MY_DATA } from '../data/mock';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href={MY_DATA.personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}>
            <FiGithub size={20} className="hover-primary" />
          </a>
          <a href={MY_DATA.personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}>
            <FiLinkedin size={20} className="hover-primary" />
          </a>
          <a href={`mailto:${MY_DATA.personalInfo.email}`} style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}>
            <Mail size={20} className="hover-primary" />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          Designed & Built by <span style={{ color: 'var(--accent-primary)' }}>{MY_DATA.personalInfo.name}</span>
        </p>
      </div>
      <style>
        {`
          .hover-primary:hover {
            color: var(--accent-primary);
          }
        `}
      </style>
    </motion.footer>
  );
};

export default Footer;