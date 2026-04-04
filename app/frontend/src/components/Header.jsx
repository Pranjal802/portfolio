import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    background: isScrolled ? 'rgba(9, 9, 11, 0.8)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
    padding: '1.25rem 0'
  };

  return (
    <motion.header 
      style={headerStyle}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
          <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
          Pranjal
          <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', transition: 'color 0.3s' }} className="hover-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" style={{
            background: 'var(--accent-primary)',
            color: '#000',
            padding: '0.5rem 1.25rem',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'opacity 0.3s'
          }} className="hover-opacity">
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        .hover-white:hover { color: #fff !important; }
        .hover-opacity:hover { opacity: 0.9; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
