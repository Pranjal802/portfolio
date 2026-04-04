import React from 'react';
import { MY_DATA } from '../data/mock';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // experience
        </p>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Work Experience
        </h2>
      </div>

      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        {/* Vertical Timeline Line */}
        <div style={{ 
          position: 'absolute', 
          left: 0, 
          top: '20px', 
          bottom: '20px', 
          width: '2px', 
          background: 'rgba(255,255,255,0.1)' 
        }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {MY_DATA.experience.map((exp, index) => (
            <div key={exp.id} style={{ position: 'relative' }}>
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '-1.85rem', 
                top: '1.5rem', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: 'var(--accent-primary)',
                border: '2px solid var(--bg-primary)'
              }}></div>

              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-title-row">
                    <h3>{exp.role}</h3>
                    <div className="exp-meta">
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  
                  <div className="exp-subtitle-row">
                    <div className="exp-company">
                      <Building2 size={14} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="exp-meta">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="exp-list">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s;
        }
        .exp-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .exp-header {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .exp-title-row, .exp-subtitle-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .exp-title-row h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .exp-company {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-primary);
          font-weight: 500;
        }
        .exp-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .exp-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .exp-list li::before {
          content: '•';
          color: var(--accent-primary);
          font-weight: bold;
        }
      `}</style>
    </motion.section>
  );
};

export default Experience;