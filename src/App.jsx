import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Exploring } from './components/Exploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for clean navigation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'exploring', 'connect'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="editorial-app-root">
      {/* Main Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content">
        <Hero identity={portfolioData.identity} />
        <About about={portfolioData.about} />
        <Projects
          projectsSection={portfolioData.projectsSection}
          projects={portfolioData.projects}
        />
        <Exploring exploring={portfolioData.exploring} />
        <Contact contact={portfolioData.contact} />
      </main>

      {/* Footer */}
      <Footer name={portfolioData.identity.name} />
    </div>
  );
}

export default App;
