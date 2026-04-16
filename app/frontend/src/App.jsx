import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: 'rgba(24, 24, 27, 0.9)',
            color: '#fff',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;