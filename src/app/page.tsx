"use client"

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MessageCircle, X, Terminal, Database, Wifi, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '' });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [matrixElements, setMatrixElements] = useState<Array<{
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
    text: string;
  }>>([]);

  // Load theme preference from memory on mount
  useEffect(() => {
    const savedTheme = localStorage?.getItem?.('portfolio-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Generate matrix elements on client-side only to avoid hydration mismatch
  useEffect(() => {
    const elements = [...Array(50)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2,
      text: Math.random() > 0.5 ? '1' : '0'
    }));
    setMatrixElements(elements);
  }, []);

  // Save theme preference to memory
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio-theme', newTheme ? 'dark' : 'light');
    }
  };

  const projects = [
    {
      id: 1,
      title: "Portifólio",
      shortDesc: "Portifólio de projetos",
      fullDesc: "Portifólio de projetos com informações sobre mim e meus projetos desenvolvido com tecnologias modernas.",
      tech: ["Next.js", "Tailwind CSS", "Lucide-react", "React", "TypeScript"],
      emoji: "💻",
      link: "https://portfolio-8nxpyq024-rogerwallaces-projects.vercel.app/"
    },
    {
      id: 2,
      title: "Micro-SaaS NeeduK",
      shortDesc: "Plataforma que conecta vida acadêmica e oportunidades profissionais em um só lugar.",
      fullDesc: "Micro-SaaS para conectar estudantes, empresas e universidades, facilitando oportunidades de estágio, emprego e parcerias educacionais através de um sistema avançado de atividades colaborativas.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Better Auth", "Prisma", "PostgreSQL", "Zod", "Lucide React"],
      emoji: "📊",
      link: "https://github.com/Rogerwa11/needuk-next"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Node.js",
    "React", "Angular", "Vue", "Tailwind CSS",
    "Java", "Python", "Git e GitHub", "Bootstrap"
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email enviado!\nNome: ${contactForm.name}\nEmail: ${contactForm.email}`);
    setContactForm({ name: '', email: '' });
  };

  const profile = {
    academic_background: 'Information Systems',
    name: { first_name: 'Roger', last_name: 'Wallace' },
    description: 'Passionate for developing modern software solutions with cutting-edge technologies',
    email: 'rooger.wallace@gmail.com',
    phone: '+55 98 99195-2221',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/rogerwa11',
    twitter: 'https://twitter.com/',
    whatsapp: 'https://wa.me/5598991952221?text=ol%C3%A1%20Roger%2C%20vim%20pelo%20seu%20portif%C3%B3lio',
    location: 'São luis, Maranhão',
  }

  // Theme classes
  const themeClasses = {
    background: isDarkMode ? 'bg-black' : 'bg-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    border: isDarkMode ? 'border-white' : 'border-gray-900',
    borderSecondary: isDarkMode ? 'border-gray-600' : 'border-gray-400',
    hover: isDarkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-gray-100',
    focus: isDarkMode ? 'focus:bg-white focus:text-black' : 'focus:bg-gray-900 focus:text-gray-100',
    card: isDarkMode ? 'bg-black' : 'bg-gray-50',
    overlay: isDarkMode ? 'bg-black/90' : 'bg-gray-100/90'
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} font-mono ${themeClasses.text} relative overflow-x-hidden transition-colors duration-300`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-8 right-8 z-50 w-16 h-16 ${themeClasses.border} border-2 ${themeClasses.card} ${themeClasses.hover} transition-all duration-300 transform hover:scale-110 hover:rotate-12 flex items-center justify-center group`}
        aria-label="Toggle theme"
      >
        <div className="relative">
          {isDarkMode ? (
            <Sun className="w-8 h-8 animate-pulse" />
          ) : (
            <Moon className="w-8 h-8 animate-pulse" />
          )}
          {/* Corner indicators */}
          <div className={`absolute -top-2 -left-2 w-2 h-2 border-l border-t ${themeClasses.border} group-hover:animate-ping`}></div>
          <div className={`absolute -top-2 -right-2 w-2 h-2 border-r border-t ${themeClasses.border} group-hover:animate-ping`}></div>
          <div className={`absolute -bottom-2 -left-2 w-2 h-2 border-l border-b ${themeClasses.border} group-hover:animate-ping`}></div>
          <div className={`absolute -bottom-2 -right-2 w-2 h-2 border-r border-b ${themeClasses.border} group-hover:animate-ping`}></div>
        </div>
      </button>

      {/* Matrix-style background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0">
          {matrixElements.map((element, i) => (
            <div
              key={i}
              className={`absolute ${themeClasses.text} text-xs animate-pulse`}
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.animationDelay}s`,
                animationDuration: `${element.animationDuration}s`
              }}
            >
              {element.text}
            </div>
          ))}
        </div>
      </div>

      {/* Grid pattern background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDarkMode ? "white" : "#1f2937"} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating tech elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-3 h-3 ${themeClasses.border} border animate-ping opacity-30`}></div>
        <div className={`absolute top-1/4 right-20 w-2 h-2 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} animate-pulse opacity-40`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-4 h-4 ${themeClasses.border} border-2 rotate-45 animate-spin opacity-20`} style={{ animationDuration: '8s' }}></div>
        <div className={`absolute top-1/2 right-1/3 w-6 h-1 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} animate-pulse opacity-30`}></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl z-10">
          {/* Tech Avatar */}
          <div className="relative">
            <div className={`w-80 h-80 ${themeClasses.border} border-4 rounded-full flex items-center justify-center ${themeClasses.card} shadow-2xl relative overflow-hidden`}>
              {/* Inner circuit patterns */}
              <div className="absolute inset-0">
                {/* Main circuits */}
                <div className={`absolute top-10 left-10 w-12 h-0.5 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute top-10 left-10 w-0.5 h-12 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute top-10 right-10 w-12 h-0.5 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute top-10 right-10 w-0.5 h-12 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute bottom-10 left-10 w-12 h-0.5 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute bottom-10 left-10 w-0.5 h-12 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute bottom-10 right-10 w-12 h-0.5 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
                <div className={`absolute bottom-10 right-10 w-0.5 h-12 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>

                {/* Concentric circles */}
                <div className={`absolute inset-16 ${themeClasses.border} border opacity-40 rounded-full animate-spin`} style={{ animationDuration: '15s' }}></div>
                <div className={`absolute inset-24 ${themeClasses.border} border opacity-30 rounded-full animate-spin`} style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                <div className={`absolute inset-32 ${themeClasses.border} border opacity-20 rounded-full animate-spin`} style={{ animationDuration: '20s' }}></div>

                {/* Cross lines */}
                <div className={`absolute top-1/2 left-0 w-full h-0.5 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-20 transform -translate-y-0.5`}></div>
                <div className={`absolute top-0 left-1/2 w-0.5 h-full ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-20 transform -translate-x-0.5`}></div>
              </div>

              {/* Avatar */}
              <div className="z-10 relative w-75 h-75 rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://github.com/rogerwa11.png"
                  alt="Roger Wallace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status indicators */}
              <div className={`absolute top-4 right-4 w-3 h-3 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} animate-pulse`}></div>
              <div className={`absolute top-4 left-4 w-8 h-0.5 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
              <div className={`absolute bottom-4 right-4 w-0.5 h-8 ${themeClasses.background === 'bg-black' ? 'bg-white' : 'bg-gray-900'} opacity-60`}></div>
            </div>

            {/* Floating tech icons */}
            <div className={`absolute -top-8 -right-8 w-16 h-16 ${themeClasses.border} border-2 ${themeClasses.card} flex items-center justify-center animate-bounce transform rotate-12`}>
              <Terminal className={`w-8 h-8 ${themeClasses.text}`} />
            </div>
            <div className={`absolute -bottom-8 -left-8 w-16 h-16 ${themeClasses.border} border-2 ${themeClasses.card} flex items-center justify-center animate-pulse transform -rotate-12`}>
              <Database className={`w-8 h-8 ${themeClasses.text}`} />
            </div>
            <div className={`absolute top-1/2 -left-12 w-12 h-12 ${themeClasses.border} border-2 ${themeClasses.card} flex items-center justify-center animate-spin transform`} style={{ animationDuration: '8s' }}>
              <Wifi className={`w-6 h-6 ${themeClasses.text}`} />
            </div>
          </div>

          {/* Info section */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className={`text-6xl md:text-8xl font-black ${themeClasses.text} mb-4 transform -skew-x-3 tracking-tight`}>
                {profile.name.first_name}
              </h1>
              <h1 className={`text-6xl md:text-8xl font-black ${themeClasses.text} transform skew-x-3 tracking-tight`}>
                {profile.name.last_name}
              </h1>
            </div>

            <div className={`${themeClasses.border} border-2 ${themeClasses.card} p-4 mb-8 transform rotate-1`}>
              <div className="transform -rotate-1">
                <p className={`text-xl ${themeClasses.text} font-bold uppercase tracking-widest font-mono`}>
                  &lt; {profile.academic_background} /&gt;
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start gap-6 mb-10">
              <a
                href={profile.linkedin}
                target="_blank"
                className={`w-14 h-14 ${themeClasses.border} border-2 ${themeClasses.card} ${themeClasses.hover} transition-all transform rotate-12 hover:rotate-6 flex items-center justify-center`}
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                className={`w-14 h-14 ${themeClasses.border} border-2 ${themeClasses.card} ${themeClasses.hover} transition-all transform -rotate-12 hover:-rotate-6 flex items-center justify-center`}
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                className={`w-14 h-14 ${themeClasses.border} border-2 ${themeClasses.card} ${themeClasses.hover} transition-all transform rotate-6 hover:rotate-12 flex items-center justify-center`}
              >
                <Twitter className="w-7 h-7" />
              </a>
            </div>

            <div className={`${themeClasses.border} border-2 ${themeClasses.card} p-6 mb-10 transform -rotate-1 max-w-md`}>
              <div className="transform rotate-1">
                <p className={`${themeClasses.textSecondary} leading-relaxed text-lg font-mono`}>
                  {profile.description}
                </p>
              </div>
            </div>

            <a
              href="/roger_wallace.pdf"
              download
              className={`inline-block ${themeClasses.border} border-4 ${themeClasses.card} ${themeClasses.hover} px-10 py-4 font-bold ${themeClasses.text} transform hover:scale-105 transition-all uppercase tracking-wider text-lg`}
            >
              &gt; DOWNLOAD_CV.pdf
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-8 py-32 relative z-10">
        <h2 className={`text-5xl font-black ${themeClasses.text} mb-16 text-center transform -skew-x-2 tracking-wider`}>
          [ PROJECTS.EXE ]
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <div
                className={`w-full aspect-square ${themeClasses.border} border-2 ${themeClasses.card} cursor-pointer transform hover:scale-105 transition-all flex flex-col items-center justify-center p-8 hover:rotate-2 relative overflow-hidden`}
                onClick={() => setExpandedProject(project.id)}
              >
                {/* Scan line effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDarkMode ? 'via-white/10' : 'via-gray-900/10'} to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000`}></div>

                <div className="text-6xl mb-6 animate-pulse">{project.emoji}</div>
                <h3 className={`font-bold text-center ${themeClasses.text} text-lg mb-3 uppercase tracking-wide`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${themeClasses.textMuted} text-center uppercase tracking-wider`}>
                  {project.shortDesc}
                </p>

                {/* Corner brackets */}
                <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 ${themeClasses.border}`}></div>
                <div className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 ${themeClasses.border}`}></div>
                <div className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 ${themeClasses.border}`}></div>
                <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 ${themeClasses.border} opacity-0 group-hover:opacity-100 animate-pulse transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {expandedProject && (
        <div className={`fixed inset-0 ${themeClasses.overlay} flex items-center justify-center z-50 p-4`}>
          <div className={`${themeClasses.border} border-4 ${themeClasses.card} p-10 max-w-3xl w-full transform rotate-1`}>
            <div className="transform -rotate-1">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-6">
                  <span className="text-7xl">
                    {projects.find(p => p.id === expandedProject)?.emoji}
                  </span>
                  <div>
                    <h3 className={`text-3xl font-black ${themeClasses.text} uppercase tracking-wider`}>
                      {projects.find(p => p.id === expandedProject)?.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedProject(null)}
                  className={`w-12 h-12 ${themeClasses.border} border-2 ${themeClasses.card} ${themeClasses.hover} flex items-center justify-center transition-all`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className={`${themeClasses.border} border-2 ${themeClasses.card} p-6 mb-8`}>
                <p className={`${themeClasses.textSecondary} leading-relaxed text-lg font-mono`}>
                  {projects.find(p => p.id === expandedProject)?.fullDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {projects.find(p => p.id === expandedProject)?.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 ${themeClasses.border} border ${themeClasses.card} text-sm font-bold uppercase tracking-wide ${themeClasses.text}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projects.find(p => p.id === expandedProject)?.link}
                target="_blank"
                className={`inline-block ${themeClasses.border} border-4 ${themeClasses.card} ${themeClasses.hover} px-8 py-4 font-bold ${themeClasses.text} transform hover:scale-105 transition-all uppercase tracking-wider`}
              >
                &gt; LAUNCH_PROJECT
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      <section className="container mx-auto px-8 py-32 relative z-10">
        <h2 className={`text-5xl font-black ${themeClasses.text} mb-16 text-center transform skew-x-2 tracking-wider`}>
          [ SKILLS.JSON ]
        </h2>

        <div className={`${themeClasses.border} border-4 ${themeClasses.card} p-10 transform -rotate-1`}>
          <div className="transform rotate-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className={`flex items-center gap-4 ${themeClasses.border} border ${themeClasses.card} p-4 ${themeClasses.hover} transition-all group`}>
                  <span className={`font-bold text-xl ${themeClasses.text} ${isDarkMode ? 'group-hover:text-black' : 'group-hover:text-gray-100'} transition-colors`}>▶</span>
                  <span className={`font-mono font-medium ${themeClasses.text} ${isDarkMode ? 'group-hover:text-black' : 'group-hover:text-gray-100'} uppercase tracking-wide text-sm transition-colors`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-8 py-32 relative z-10">
        <h2 className={`text-5xl font-black ${themeClasses.text} mb-16 text-center transform -skew-x-2 tracking-wider`}>
          [ CONTACT.INIT() ]
        </h2>

        <div className={`${themeClasses.border} border-4 ${themeClasses.card} p-10 transform rotate-1 max-w-lg mx-auto`}>
          <div className="transform -rotate-1">
            <div className={`${themeClasses.border} border-2 ${themeClasses.card} p-4 mb-8`}>
              <p className={`${themeClasses.text} text-center font-mono uppercase tracking-wide`}>
                &gt; Initialize connection protocol
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="// Enter your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className={`w-full px-4 py-4 ${themeClasses.border} border-2 ${themeClasses.card} font-mono font-bold focus:outline-none ${themeClasses.focus} ${themeClasses.text} ${themeClasses.textMuted.replace('text-', 'placeholder-')} uppercase tracking-wide`}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="// Enter your email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className={`w-full px-4 py-4 ${themeClasses.border} border-2 ${themeClasses.card} font-mono font-bold focus:outline-none ${themeClasses.focus} ${themeClasses.text} ${themeClasses.textMuted.replace('text-', 'placeholder-')} uppercase tracking-wide`}
                />
              </div>

              <a
                href={`mailto:${profile.email}`}
                className={`w-full ${themeClasses.border} border-4 ${themeClasses.card} ${themeClasses.hover} px-6 py-4 font-bold transform hover:scale-105 transition-all flex items-center justify-center gap-3 ${themeClasses.text} uppercase tracking-wider`}
              >
                <Mail className="w-5 h-5" />
                &gt; SEND_EMAIL
              </a>
            </div>

            <a
              href={profile.whatsapp}
              className={`w-full mt-6 ${themeClasses.border} border-4 ${themeClasses.card} ${themeClasses.hover} px-6 py-4 font-bold transform hover:scale-105 transition-all flex items-center justify-center gap-3 ${themeClasses.text} uppercase tracking-wider`}
            >
              <MessageCircle className="w-5 h-5" />
              &gt; WHATSAPP.CONNECT()
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`container mx-auto px-8 py-12 text-center ${themeClasses.border} border-t-2 relative z-10`}>
        <div className={`${themeClasses.border} border-2 ${themeClasses.card} p-6`}>
          <p className={`${themeClasses.text} font-mono uppercase tracking-wider`}>
            © 2024 ROGER_WALLACE | SYSTEM_STATUS:
            <span className="ml-3 animate-pulse">●</span>
            <span className="ml-1">ONLINE</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
