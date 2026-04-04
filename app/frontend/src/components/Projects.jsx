import React from 'react';
import { MY_DATA } from '../data/mock';
import { ExternalLink, Database, Calendar } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
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
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Featured Projects
        </h2>
      </div>

      <div className="projects-grid">
        {MY_DATA.projects.map((project, index) => (
          <div key={project.id} className="project-card">
            
            <div className="project-top">
              <div className="project-icon-box">
                <Database size={20} color="var(--accent-primary)" />
              </div>
              <div className="project-links">
                <a href={project.repoLink} target="_blank" rel="noreferrer" className="project-link">
                  <FiGithub size={20} />
                </a>
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="featured-badge">
              <span className="dot"></span> FEATURED
            </div>

            <h3 className="project-title">{project.title}</h3>
            
            <p className="project-desc">
              {project.description}
            </p>
            
            <div className="project-meta-pills">
              <span className="meta-pill">
                MERN Stack
              </span>
              <span className="meta-pill">
                <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                {project.date}
              </span>
            </div>

            <div className="project-tech-pills">
              {project.techStack.map(tech => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .project-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;
        }
        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
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
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-link {
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .project-link:hover {
          color: var(--accent-primary);
        }
        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-primary);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          align-self: flex-start;
        }
        .featured-badge .dot {
          width: 6px;
          height: 6px;
          background: var(--accent-primary);
          border-radius: 50%;
        }
        .project-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .project-meta-pills {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 1rem;
        }
        .meta-pill {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
        }
        .project-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-pill {
          background: rgba(30, 30, 34, 1);
          color: #a1a1aa;
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;