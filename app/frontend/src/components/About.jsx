import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MY_DATA } from '../data/mock';
import { Zap, Layout, Coffee, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ to, suffix = "", decimals = 0, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    hasAnimated.current = true;
    const startTime = performance.now();
    const startVal = 0;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = startVal + (to - startVal) * eased;
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [to, duration]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and re-animate every time it comes into view
            setCount(0);
            hasAnimated.current = false;
            // Small delay so the 0 renders first, then animate up
            requestAnimationFrame(() => {
              startAnimation();
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startAnimation]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // about me
        </p>
        <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Get to know me
        </h2>
      </div>
      
      <div className="grid grid-cols-2" style={{ alignItems: 'start', gap: '4rem' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7 }}>
          <p>
            I'm a passionate <span className="highlight">MERN Stack Developer</span> currently pursuing my B.E. in Information Technology at G H Patel College of Engineering & Technology. With hands-on experience from internships at leading companies, I specialize in building responsive, dynamic, and user-friendly web applications.
          </p>
          <p>
            My expertise spans across the full JavaScript ecosystem — from crafting pixel-perfect frontends with <span className="highlight">React.js</span> and <span className="highlight">Next.js</span>, to architecting robust backends with <span className="highlight">Node.js</span> and <span className="highlight">Express.js</span>, all connected through <span className="highlight">MongoDB</span>.
          </p>
          <p>
            I'm always eager to learn new technologies, solve complex problems, and contribute to projects that make a real impact. Currently exploring advanced concepts in cloud services, GraphQL, and performance optimization.
          </p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <Zap size={24} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              <AnimatedCounter to={3} suffix="+" />
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Projects Built</p>
          </div>
          <div className="stat-card">
            <Layout size={24} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              <AnimatedCounter to={20} suffix="+" />
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Technologies</p>
          </div>
          <div className="stat-card">
            <Coffee size={24} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              <AnimatedCounter to={8.91} decimals={2} />
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>CGPA</p>
          </div>
          <div className="stat-card">
            <TrendingUp size={24} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              <AnimatedCounter to={2} />
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Internships</p>
          </div>
        </div>
      </div>
      <style>{`
        .highlight {
          color: var(--accent-primary);
          font-weight: 500;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .stat-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(20, 184, 166, 0.2);
          background: rgba(24, 24, 27, 1);
        }
        @media (max-width: 768px) {
          .stats-grid { gap: 1rem; grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </motion.section>
  );
};

export default About;
