import { Linkedin, Github, ArrowDown } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const skills = [
    'REACT',
    'NEXT.JS',
    'TYPESCRIPT',
    'JAVASCRIPT',
    'TAILWIND CSS',
    'HTML/CSS',
    'NODE.JS',
    'FRONTEND'
  ];
  const techIcons = useMemo(() => [
    '</>',
    '{}',
    '[]',
    '#',
    '<div>',
    'JS',
    'TS',
    'npm',
    'git',
    'React',
    '()',
    '&&',
    '=>',
    'HTML',
    'CSS'
  ], []);

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);  const [floatingIcons, setFloatingIcons] = useState<{ 
    icon: string; 
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
      opacity: number;
    };
  }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  useEffect(() => {
    const icons = techIcons.map((icon: string) => ({
      icon,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${6 + Math.random() * 6}s`,
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.1,
      },
    }));
    setFloatingIcons(icons);
  }, [techIcons]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navbarHeight = 64;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute font-mono text-lg md:text-xl animate-float"
            style={{
              ...item.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute top-20 left-10 w-32 h-20 border border-neon-green/20 rounded-lg transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-24 h-16 border border-neon-blue/20 rounded transform -rotate-6"></div>
        <div className="absolute bottom-40 left-16 w-28 h-18 border border-neon-purple/20 rounded-lg transform rotate-6"></div>
        <div className="absolute bottom-32 right-32 w-20 h-32 border border-neon-green/20 rounded transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-24 border border-neon-blue/20 rounded transform rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-16 border border-neon-purple/20 rounded transform -rotate-30"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Hello! I'm Rafael Race
              </p>
              <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
                <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-8xl">
                  <span
                    key={currentSkillIndex}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue animate-fade-in-up"
                  >
                    {skills[currentSkillIndex]}
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Developer, I make Awesome and Dynamic Web Applications.
              </p>
            </div>            <div className="flex justify-center">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-neon-green to-neon-blue text-background px-8 py-4 font-semibold hover:from-neon-blue hover:to-neon-purple transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-blue/30"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/rafael-race-54033719b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center rounded-lg hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/rhaprace"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center rounded-lg hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
