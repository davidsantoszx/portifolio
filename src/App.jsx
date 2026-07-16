import React, { useEffect, useState } from "react";

import experiences from "./data/experiences";
import projects from "./data/projects";

import CustomStyles from "./components/CustomStyles";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  // =========================================================================
  // ESTADOS DA APLICAÇÃO
  // =========================================================================

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // =========================================================================
  // ANIMAÇÃO DAS SEÇÕES AO ENTRAR NA TELA
  // =========================================================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    const sections = document.querySelectorAll(".fade-in-section");

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // =========================================================================
  // ROLAGEM SUAVE ENTRE AS SEÇÕES
  // =========================================================================

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // =========================================================================
  // FILTRO DOS PROJETOS
  // =========================================================================

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // =========================================================================
  // RENDERIZAÇÃO
  // =========================================================================

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
  isDarkMode ? 'bg-[#2F4638]' : 'bg-[#f7f7f7]'
} ${
  isDarkMode ? 'text-[#ECE7DD]' : 'text-neutral-800'
}`}>
      <CustomStyles />

      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Hero
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      <Skills
        isDarkMode={isDarkMode}
      />

      <Experience
        experiences={experiences}
        isDarkMode={isDarkMode}
      />

      <Projects
        isDarkMode={isDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredProjects={filteredProjects}
      />

      <Education
        isDarkMode={isDarkMode}
      />

      <Contact
        isDarkMode={isDarkMode}
      />

      <Footer
        isDarkMode={isDarkMode}
      />
    </div>
  );
}