import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Close mobile menu on scroll
      if (window.scrollY > 80) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <motion.header 
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: isScrolled || mobileMenuOpen ? 'rgba(9, 9, 11, 0.95)' : 'transparent',
          backdropFilter: isScrolled || mobileMenuOpen ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          padding: '1.1rem 0'
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
            Pranjal
            <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    style={{ fontSize: '0.88rem', color: 'var(--text-muted)', transition: 'color 0.3s' }} 
                    className="nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                background: 'var(--accent-primary)',
                color: '#000',
                padding: '0.45rem 1.15rem',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '0.88rem',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap'
              }} 
              className="hire-btn"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '62px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(9, 9, 11, 0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    display: 'block',
                    padding: '0.9rem 1rem',
                    color: 'var(--text-muted)',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    borderBottom: '1px solid rgba(255,255,255,0.04)'
                  }}
                  className="mobile-nav-link"
                >
                  <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginRight: '0.75rem', fontSize: '0.8rem' }}>
                    0{i + 1}.
                  </span>
                  {link.name}
                </motion.a>
              ))}

              {/* CTA row */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  style={{
                    flex: 1, textAlign: 'center',
                    background: 'var(--accent-primary)', color: '#000',
                    padding: '0.8rem', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem'
                  }}
                >
                  Hire Me
                </a>
                <a
                  href="/resume.pdf"
                  download
                  style={{
                    flex: 1, textAlign: 'center',
                    background: 'transparent', color: 'var(--accent-primary)',
                    border: '1px solid var(--accent-primary)',
                    padding: '0.8rem', borderRadius: '8px', fontWeight: '500', fontSize: '0.95rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={15} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { color: #fff !important; }
        .hire-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .mobile-nav-link:hover { color: #fff !important; background: rgba(255,255,255,0.04); }
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
