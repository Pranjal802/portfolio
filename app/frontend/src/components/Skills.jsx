import React from 'react';
import { MY_DATA } from '../data/mock';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, 
  SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs,
  SiHtml5, SiBootstrap, SiFirebase, SiAppwrite, SiJest,
  SiGraphql, SiSocketdotio, SiNpm, SiPostman
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { DiGit, DiGithubBadge, DiHeroku } from 'react-icons/di';
import { Monitor, Server, Database, Wrench, Globe, Key, ShieldCheck, Layers, AlertCircle, RefreshCw, Network, Files, ListOrdered, Triangle, Smartphone, Map } from 'lucide-react';

const Skills = () => {
  const getIcon = (skillName) => {
    const name = skillName.toLowerCase();
    // React / Web Ecosystem
    if (name.includes('react router')) return <Map color="#CA4245" size={16} />;
    if (name.includes('react hooks')) return <SiReact color="#61DAFB" />;
    if (name.includes('react')) return <SiReact color="#61DAFB" />;
    if (name.includes('jsx')) return <SiReact color="#61DAFB" />;
    if (name.includes('next.js')) return <SiNextdotjs color="#FFFFFF" />;
    
    // Core JS/TS/HTML/CSS
    if (name.includes('javascript')) return <SiJavascript color="#F7DF1E" />;
    if (name.includes('typescript')) return <SiTypescript color="#3178C6" />;
    if (name.includes('html5')) return <SiHtml5 color="#E34F26" />;
    if (name.includes('css3')) return <FaCss3Alt color="#1572B6" />;
    
    // Styling
    if (name.includes('tailwind')) return <SiTailwindcss color="#06B6D4" />;
    if (name.includes('bootstrap')) return <SiBootstrap color="#7952B3" />;
    if (name.includes('shadcn')) return <Triangle color="#FFFFFF" size={16} fill="#FFFFFF" />;
    if (name.includes('responsive')) return <Smartphone color="#A855F7" size={16} />;
    
    // Backend/Node Ecosystem
    if (name.includes('node.js')) return <SiNodedotjs color="#339933" />;
    if (name.includes('express.js')) return <SiExpress color="#FFFFFF" />;
    if (name.includes('restful')) return <Globe color="#10B981" size={16} />;
    if (name.includes('jwt')) return <Key color="#FF00FF" size={16} />;
    if (name.includes('oauth')) return <Key color="#F59E0B" size={16} />;
    if (name.includes('zod')) return <ShieldCheck color="#3B82F6" size={16} />;
    if (name.includes('middleware')) return <Layers color="#8B5CF6" size={16} />;
    if (name.includes('error handling')) return <AlertCircle color="#EF4444" size={16} />;
    if (name.includes('graphql')) return <SiGraphql color="#E10098" />;
    if (name.includes('socket')) return <SiSocketdotio color="#FFFFFF" />;
    if (name.includes('redux')) return <RefreshCw color="#764ABC" size={16} />;
    if (name.includes('context api')) return <SiReact color="#61DAFB" />;
    
    // Databases
    if (name.includes('mongodb')) return <SiMongodb color="#47A248" />;
    if (name.includes('mongoose')) return <SiMongodb color="#800000" />;
    if (name.includes('crud')) return <Database color="#14B8A6" size={16} />;
    if (name.includes('data modeling')) return <Network color="#8B5CF6" size={16} />;
    if (name.includes('aggregation')) return <Files color="#F59E0B" size={16} />;
    if (name.includes('indexing')) return <ListOrdered color="#3B82F6" size={16} />;

    // Tools
    if (name.includes('github')) return <DiGithubBadge color="#FFFFFF" size={20} />;
    if (name.includes('git')) return <DiGit color="#F05032" size={20} />;
    if (name.includes('npm') || name.includes('yarn')) return <SiNpm color="#CB3837" />;
    if (name.includes('postman')) return <SiPostman color="#FF6C37" />;
    if (name.includes('vercel')) return <span style={{ color: '#fff', fontSize: '1rem', lineHeight: 1 }}>▲</span>;
    if (name.includes('netlify')) return <span style={{ color: '#00C7B7', fontWeight: 'bold' }}>◈</span>;
    if (name.includes('heroku')) return <DiHeroku color="#430098" size={20} />;
    if (name.includes('firebase')) return <SiFirebase color="#FFCA28" />;
    if (name.includes('appwrite')) return <SiAppwrite color="#FD366E" />;
    if (name.includes('jest')) return <SiJest color="#C21325" />;
    
    // Fallback
    return <span style={{ color: 'var(--accent-primary)', fontSize: '1rem', lineHeight: 1 }}>▹</span>;
  };

  const SkillPill = ({ skill }) => (
    <div className="skill-pill">
      {getIcon(skill)}
      <span>{skill}</span>
    </div>
  );

  return (
    <motion.section 
      id="skills" 
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
          02. Technical Arsenal
        </p>
      </div>
      
      <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
        {/* Frontend */}
        <div className="skills-card">
          <div className="skills-card-header">
            <Monitor size={24} color="var(--accent-primary)" />
            <h3>Frontend Development</h3>
          </div>
          <div className="skills-grid">
            {MY_DATA.skills.frontend.map(skill => <SkillPill key={skill} skill={skill} />)}
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card">
          <div className="skills-card-header">
            <Server size={24} color="var(--accent-primary)" />
            <h3>Backend Development</h3>
          </div>
          <div className="skills-grid">
            {MY_DATA.skills.backend.map(skill => <SkillPill key={skill} skill={skill} />)}
          </div>
        </div>

        {/* Database */}
        <div className="skills-card">
          <div className="skills-card-header">
            <Database size={24} color="var(--accent-primary)" />
            <h3>Databases</h3>
          </div>
          <div className="skills-grid">
            {MY_DATA.skills.database.map(skill => <SkillPill key={skill} skill={skill} />)}
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="skills-card">
          <div className="skills-card-header">
            <Wrench size={24} color="var(--accent-primary)" />
            <h3>Tools & Architecture</h3>
          </div>
          <div className="skills-grid">
            {/* Show Tools and first few advanced tools */}
            {MY_DATA.skills.tools.concat(MY_DATA.skills.advanced.slice(0, 5)).map(skill => <SkillPill key={skill} skill={skill} />)}
          </div>
        </div>
      </div>

      <style>{`
        .skills-card {
          background: rgba(20, 20, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: border-color 0.3s;
        }
        .skills-card:hover {
          border-color: rgba(20, 184, 166, 0.4);
        }
        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .skills-card-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-primary);
          transition: all 0.2s;
        }
        .skill-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </motion.section>
  );
};

export default Skills;
