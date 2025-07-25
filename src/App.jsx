import React, { useState } from 'react';
import { HeroPages } from './pages/HeroPages';
import { AboutPages } from './pages/AboutPages';
import { SkillsPages } from './pages/SkillsPages';
import { ProjectsPages } from './pages/ProjectPages';
import { ContactPages } from './pages/ContactPages';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ExperiancePages } from './pages/ExperiancePages';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    home: <HeroPages />,
    about: <AboutPages />,
    experience: <ExperiancePages />,
    skills: <SkillsPages />,
    projects: <ProjectsPages />,
    contact: <ContactPages />
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        {activeSection === 'home' && <HeroPages setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutPages />}
        {activeSection === 'experience' && <ExperiancePages />}
        {activeSection === 'skills' && <SkillsPages />}
        {activeSection === 'projects' && <ProjectsPages />}
        {activeSection === 'contact' && <ContactPages />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;