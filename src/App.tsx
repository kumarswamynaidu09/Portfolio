/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef<HTMLElement>(null);

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    const mainEl = mainRef.current;
    mainEl?.addEventListener('scroll', handleScroll);
    return () => mainEl?.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useGSAP(() => {
    const sections = gsap.utils.toArray('section.pixel-panel');
    
    sections.forEach((section: any, i) => {
      if (i === 0) {
        // Initial cinematic entrance for the hero section
        gsap.fromTo(
          section,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
        );
        return;
      }
      
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            scroller: mainRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, { scope: mainRef });

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-slate-300 overflow-hidden relative z-0 crt-scanlines">
      <div className="pixel-particles-wrapper opacity-30">
        <div className="pixel-particles-1"></div>
        <div className="pixel-particles-2"></div>
      </div>
      <div className="z-20 relative">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <main ref={mainRef} className="flex-1 overflow-y-auto p-2 md:p-4 lg:p-6 scroll-smooth relative z-10">
        <div className="w-full mx-auto space-y-4 md:space-y-6 pb-24">
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
        </div>
      </main>
    </div>
  );
}
