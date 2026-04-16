import React from 'react';
import { MY_DATA } from '../data/mock';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Code, FileBadge } from 'lucide-react';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

const Achievements = () => {
  return (
    <motion.section 
      id="achievements" 
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // achievements
        </p>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Milestones & Hackathons
        </h2>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem', alignItems: 'start' }}>
        
        {/* Hackathons */}
        <div className="achievement-col">
          <div className="ach-col-header">
            <div className="icon-box-sm">
              <Trophy size={20} color="var(--accent-primary)" />
            </div>
            <h3>Hackathons</h3>
          </div>
          
          <div className="ach-list">
            {MY_DATA.achievements.hackathons.map(hackathon => (
              <div key={hackathon.id} className="ach-card">
                <div className="ach-card-icon">
                  <Code size={16} />
                </div>
                <div className="ach-card-content">
                  <h4>{hackathon.title}</h4>
                  <p>{hackathon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Milestones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* HackerRank */}
          <div className="achievement-col">
            <div className="ach-col-header">
              <div className="icon-box-sm">
                <SiHackerrank size={20} color="var(--accent-primary)" />
              </div>
              <h3>HackerRank Certificates</h3>
            </div>
            <div className="ach-list">
              {MY_DATA.achievements.certifications.map(cert => (
                <div key={cert.id} className="ach-card">
                  <div className="ach-card-icon">
                    <FileBadge size={16} color="#00EA64" />
                  </div>
                  <div className="ach-card-content">
                    <h4>{cert.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LeetCode */}
          <div className="achievement-col">
            <div className="ach-col-header">
              <div className="icon-box-sm">
                <SiLeetcode size={20} color="var(--accent-primary)" />
              </div>
              <h3>LeetCode Milestones</h3>
            </div>
            <div className="ach-list">
              {MY_DATA.achievements.milestones.map(mile => (
                <div key={mile.id} className="ach-card">
                  <div className="ach-card-icon">
                    <Medal size={16} color="#FFA116" />
                  </div>
                  <div className="ach-card-content">
                    <h4>{mile.title}</h4>
                    <span className="platform-tag">{mile.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .achievement-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .ach-col-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .ach-col-header h3 {
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
        .ach-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .ach-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          transition: all 0.3s;
          align-items: flex-start;
        }
        .ach-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(24, 24, 27, 1);
        }
        .ach-card-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .ach-card-content h4 {
          color: var(--text-primary);
          font-size: 1.05rem;
          margin-bottom: 0.35rem;
          font-weight: 500;
        }
        .ach-card-content p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .platform-tag {
          display: inline-block;
          background: rgba(255,255,255,0.05);
          color: var(--text-muted);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          margin-top: 0.5rem;
        }
        @media (max-width: 640px) {
          .ach-card { padding: 1.25rem; }
          .ach-col-header h3 { font-size: 1.1rem; }
        }
      `}</style>
    </motion.section>
  );
};

export default Achievements;
