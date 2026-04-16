import React, { useState } from 'react';
import { MY_DATA } from '../data/mock';
import { ExternalLink, Database, Calendar, X, CheckCircle2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiAppwrite, SiGooglegemini } from 'react-icons/si';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TechIcon = ({ tech }) => {
  switch(tech.toLowerCase()) {
    case 'react.js': return <SiReact color="#61DAFB" size={22} />;
    case 'node.js': return <SiNodedotjs color="#339933" size={22} />;
    case 'express.js': return <SiExpress color="#fff" size={22} />;
    case 'mongodb': return <SiMongodb color="#47A248" size={22} />;
    case 'tailwind css': return <SiTailwindcss color="#06B6D4" size={22} />;
    case 'cloudinary': return <FaCloudUploadAlt color="#3448C5" size={22} />;
    case 'appwrite': return <SiAppwrite color="#FD366E" size={22} />;
    case 'gemini api': return <SiGooglegemini color="#8E75B2" size={22} />;
    default: return <span style={{ fontSize: '14px' }}>⚡</span>;
  }
};

const StatusBadge = ({ status }) => {
  const isLive = status === 'Live';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
      background: isLive ? 'rgba(20,184,166,0.12)' : 'rgba(255,255,255,0.05)',
      color: isLive ? 'var(--accent-primary)' : 'var(--text-muted)',
      border: `1px solid ${isLive ? 'rgba(20,184,166,0.25)' : 'rgba(255,255,255,0.08)'}`,
      padding: '0.2rem 0.65rem', borderRadius: '999px',
      fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.03em',
      fontFamily: 'var(--font-mono)'
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: isLive ? 'var(--accent-primary)' : 'var(--text-muted)', display: 'inline-block' }}></span>
      {status}
    </span>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section 
      id="projects" 
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
          // projects
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Featured Projects
        </h2>
      </div>

      <div className="projects-grid">
        {MY_DATA.projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -5 }}
          >
            <div className="project-top">
              <div className="project-icon-box">
                <Database size={20} color="var(--accent-primary)" />
              </div>
              <div className="project-links" onClick={(e) => e.stopPropagation()}>
                <a href={project.repoLink} target="_blank" rel="noreferrer" className="project-link" title="View Source">
                  <FiGithub size={19} />
                </a>
                {project.demoLink !== '#' && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
                    <ExternalLink size={19} />
                  </a>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="featured-badge">
                <span className="dot"></span> FEATURED
              </span>
              <StatusBadge status={project.status} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {project.category}
              </span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            
            <p className="project-desc">
              {project.description.length > 120 
                ? project.description.substring(0, 120) + '...' 
                : project.description}
            </p>

            {/* Tech pills */}
            <div className="project-tech-pills">
              {project.techStack.slice(0, 4).map(tech => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
              {project.techStack.length > 4 && (
                <span className="tech-pill">+{project.techStack.length - 4}</span>
              )}
            </div>

            <div className="project-footer">
              <span className="meta-pill">
                <Calendar size={11} style={{ display: 'inline', marginRight: '4px' }} />
                {project.date}
              </span>
              <span className="click-indicator">View details →</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={20} />
              </button>

              <div className="modal-body">
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="project-icon-box lg">
                    <Database size={26} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <StatusBadge status={selectedProject.status} />
                      <span className="meta-pill" style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Calendar size={12} style={{ marginRight: '4px' }} />
                        {selectedProject.date}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', background: 'rgba(255,255,255,0.04)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="modal-section">
                  <h4>About this Project</h4>
                  <p>{selectedProject.description}</p>
                </div>

                {/* Highlights */}
                {selectedProject.highlights && (
                  <div className="modal-section">
                    <h4>Key Features</h4>
                    <ul className="highlights-list">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-grid">
                    {selectedProject.techStack.map(tech => (
                      <div key={tech} className="tech-item">
                        <TechIcon tech={tech} />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="modal-actions">
                  <a href={selectedProject.repoLink} target="_blank" rel="noreferrer" className="btn-modal">
                    <FiGithub size={18} /> Source Code
                  </a>
                  {selectedProject.demoLink !== '#' && (
                    <a href={selectedProject.demoLink} target="_blank" rel="noreferrer" className="btn-modal primary">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .project-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .project-card:hover {
          border-color: rgba(20, 184, 166, 0.3);
          box-shadow: inset 0 0 30px rgba(20, 184, 166, 0.04);
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .project-icon-box {
          width: 40px;
          height: 40px;
          background: rgba(20, 184, 166, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-icon-box.lg {
          width: 52px; height: 52px;
          border-radius: 14px;
          flex-shrink: 0;
        }
        .project-links {
          display: flex;
          gap: 0.85rem;
        }
        .project-link {
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .project-link:hover { color: var(--accent-primary); }
        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-primary);
          padding: 0.2rem 0.7rem;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.07em;
        }
        .featured-badge .dot {
          width: 5px; height: 5px;
          background: var(--accent-primary);
          border-radius: 50%;
        }
        .project-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .project-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }
        .tech-pill {
          background: rgba(30, 30, 34, 1);
          color: #a1a1aa;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 1rem;
        }
        .meta-pill {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          display: inline-flex;
          align-items: center;
        }
        .click-indicator {
          font-size: 0.78rem;
          color: var(--accent-primary);
          font-family: var(--font-mono);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-card:hover .click-indicator { opacity: 1; }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .modal-content {
          background: var(--bg-surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          width: 100%;
          max-width: 640px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6);
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        .modal-close {
          position: sticky;
          top: 1.25rem;
          float: right;
          margin: 1.25rem 1.25rem 0 0;
          background: rgba(255,255,255,0.06);
          border: none;
          color: var(--text-muted);
          width: 34px; height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 1;
        }
        .modal-close:hover { background: rgba(255,255,255,0.12); color: #fff; }
        .modal-body { padding: 1.5rem 2rem 2.5rem; }
        .modal-title { font-size: clamp(1.3rem, 4vw, 1.75rem); color: var(--text-primary); line-height: 1.2; }
        .modal-section { margin-bottom: 2rem; }
        .modal-section h4 {
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .modal-section p {
          color: var(--text-muted);
          line-height: 1.75;
          font-size: 0.95rem;
        }
        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
        }
        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 0.75rem;
        }
        .tech-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 0.9rem 0.5rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          transition: all 0.25s;
        }
        .tech-item:hover {
          background: rgba(255,255,255,0.06);
          color: #fff;
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.1);
        }
        .modal-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .btn-modal {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.9rem;
          background: rgba(255,255,255,0.05);
          color: var(--text-primary);
          transition: all 0.3s;
          flex: 1;
          justify-content: center;
          min-width: 140px;
        }
        .btn-modal:hover { background: rgba(255,255,255,0.1); }
        .btn-modal.primary {
          background: var(--accent-primary);
          color: #000;
        }
        .btn-modal.primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(20,184,166,0.3);
        }
        @media (max-width: 500px) {
          .modal-body { padding: 1rem 1.25rem 2rem; }
          .modal-actions { flex-direction: column; }
          .btn-modal { min-width: unset; }
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;