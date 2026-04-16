import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { MY_DATA } from '../data/mock';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Code2, ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      className="section" 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      position: 'relative',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Availability Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: '999px',
          background: 'rgba(20, 184, 166, 0.1)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          color: 'var(--accent-primary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          marginBottom: '2rem'
        }}>
          <span>&lt;/&gt;</span> Available for opportunities
        </div>

        <h1 style={{ 
          fontSize: 'clamp(50px, 8vw, 90px)', 
          fontWeight: '800',
          lineHeight: 1.1, 
          marginBottom: '1rem', 
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em'
        }}>
          {MY_DATA.personalInfo.name.split(' ').map(part => part.charAt(0) + part.slice(1).toLowerCase()).join(' ')}
        </h1>
        
        <h2 style={{ 
          fontSize: 'clamp(30px, 5vw, 45px)', 
          fontWeight: '500',
          marginBottom: '2rem', 
          color: 'var(--accent-primary)',
          fontFamily: 'var(--font-mono)'
        }}>
          <TypeAnimation
            sequence={[
              'React Developer',
              2000,
              'MERN Stack Developer',
              2000,
              'Software Engineer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          maxWidth: '700px', 
          marginBottom: '2.5rem', 
          color: 'var(--text-muted)',
          lineHeight: 1.6
        }}>
          Passionate MERN Stack Developer with hands-on experience building responsive, 
          dynamic web applications. Skilled in React.js, Node.js, Express.js, and MongoDB 
          with a focus on creating seamless user experiences and robust backend systems.
        </p>
        
        <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="#projects" style={{
            background: 'var(--accent-primary)',
            color: '#000',
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'opacity 0.3s'
          }} className="hover-opacity">
            View Projects
          </a>
          <a href="#contact" style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            fontWeight: '500',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }} className="hover-bg-light">
            Get In Touch
          </a>
          <a href="/resume.pdf" download style={{
            background: 'transparent',
            color: 'var(--accent-primary)',
            border: '1px solid var(--accent-primary)',
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            fontWeight: '500',
            fontSize: '1rem',
            transition: 'all 0.3s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }} className="hover-accent">
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <a href={MY_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="social-box">
            <FiGithub size={20} />
          </a>
          <a href={MY_DATA.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-box">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${MY_DATA.personalInfo.email}`} className="social-box">
            <FiMail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          opacity: 0.7
        }}>
          <span>scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
      
      <style>{`
        .hover-opacity:hover { opacity: 0.9; }
        .hover-bg-light:hover { background: rgba(255,255,255,0.05); }
        .hover-accent:hover { background: rgba(20,184,166,0.08) !important; }
        @media (max-width: 600px) {
          .hero-buttons { flex-direction: column; align-items: stretch; }
          .hero-buttons a { text-align: center; justify-content: center; }
        }
        .social-box {
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: var(--text-muted);
          transition: all 0.3s;
          justify-content: center;
        }
        .social-box:hover {
          color: var(--accent-primary);
          border-color: rgba(20, 184, 166, 0.3);
          transform: translateY(-2px);
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;
