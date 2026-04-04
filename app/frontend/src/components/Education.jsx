import React from 'react';
import { MY_DATA } from '../data/mock';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section 
      id="education" 
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // education
        </p>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Education & Certifications
        </h2>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        
        {/* Education Column */}
        <div>
          <div className="edu-col-header">
            <div className="icon-box-sm">
              <GraduationCap size={20} color="var(--accent-primary)" />
            </div>
            <h3>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MY_DATA.education.map(edu => (
              <div key={edu.id} className="edu-card">
                <div className="edu-card-icon">
                  <BookOpen size={16} />
                </div>
                <div className="edu-card-content">
                  <h4>{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-meta">
                    <span className="edu-date">
                      <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {edu.date}
                    </span>
                    <span className="cgpa-pill">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="edu-col-header">
            <div className="icon-box-sm">
              <Award size={20} color="var(--accent-primary)" />
            </div>
            <h3>Certifications</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MY_DATA.certifications.map(cert => (
              <div key={cert.id} className="edu-card">
                <div className="edu-card-icon">
                  <Award size={16} />
                </div>
                <div className="edu-card-content">
                  <h4>{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .edu-col-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .edu-col-header h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .icon-box-sm {
          width: 40px;
          height: 40px;
          background: rgba(20, 184, 166, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .edu-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          transition: all 0.3s;
        }
        .edu-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .edu-card-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .edu-card-content h4 {
          color: var(--text-primary);
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }
        .edu-institution {
          color: var(--accent-primary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .cert-issuer {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .edu-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        .edu-date {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
        }
        .cgpa-pill {
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
      `}</style>
    </motion.section>
  );
};

export default Education;