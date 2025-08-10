import { Linkedin, Github, ArrowDown } from 'lucide-react';
import { useState, useEffect, useMemo, useRef } from 'react';

const Hero = () => {
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
    'CSS',
    'API',
    'JSON',
    'SQL',
    'UI/UX',
    'DEV'
  ], []);

  const [floatingIcons, setFloatingIcons] = useState<{ 
    icon: string; 
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
      opacity: number;
      scale: number;
    };
  }[]>([]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  const fullText = 'Web Developer';
  useEffect(() => {
    let index = 0;
    let mounted = true;
    let erasing = false;
    
    const timer = setInterval(() => {
      if (!mounted) return;
      
      if (!erasing && index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          setTimeout(() => {
            if (mounted) {
              erasing = true;
              index = fullText.length;
            }
          }, 2000);
        }
      } else if (erasing && index >= 0) {
        setDisplayedText(fullText.slice(0, index));
        index--;
        if (index < 0) {
          erasing = false;
          index = 0;
        }
      }
      
      setIsTyping(true);
    }, 100);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  useEffect(() => {
    const icons = techIcons.map((icon: string) => ({
      icon,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `-${Math.random() * 16}s`,
        opacity: 0.1 + Math.random() * 0.1,
        scale: 0.8 + Math.random() * 0.4,
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
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
            transition: 'background 0.3s ease-out',
          }}
        ></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute font-mono text-lg md:text-xl text-white/40 hover:text-white/60 transition-colors duration-300 animate-float cursor-pointer"
            style={{
              ...item.style,
              transform: `translate(-50%, -50%) scale(${item.style.scale})`,
              filter: 'blur(0.5px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translate(-50%, -50%) scale(${item.style.scale * 1.2})`;
              e.currentTarget.style.filter = 'blur(0px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `translate(-50%, -50%) scale(${item.style.scale})`;
              e.currentTarget.style.filter = 'blur(0.5px)';
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-20 border border-white/20 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-16 border border-white/20 rounded transform -rotate-6 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-16 w-28 h-18 border border-white/20 rounded-lg transform rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-32 w-20 h-32 border border-white/20 rounded transform -rotate-12 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-24 border border-white/20 rounded transform rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-16 border border-white/20 rounded transform -rotate-30 animate-bounce" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-12 h-12 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-4 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 font-medium animate-fade-in">
                Hello! I'm{' '}
                <span className="text-white font-bold">
                  Rafael Race
                </span>
              </p>
              
              <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="block text-white relative">
                    {displayedText}
                    {isTyping && (
                      <span className="animate-pulse text-white">|</span>
                    )}
                  </span>
                </h1>
              </div>

              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '2s' }}>
                An Aspiring Software Engineer who loves learning and adopting to our ongoing technological advancements.
                <br /> 
              </p>
            </div>
            
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '2.5s' }}>
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-white/10 text-white px-8 py-4 font-semibold rounded-lg hover:bg-card/70 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">VIEW MY WORK</span>
                <ArrowDown className="relative z-10 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '3s' }}>
            <a
              href="https://www.linkedin.com/in/rafael-race-54033719b"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center rounded-xl hover:border-neon-blue/50 hover:text-neon-blue hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/rhaprace"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center rounded-xl hover:border-neon-blue/50 hover:text-neon-blue hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
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
