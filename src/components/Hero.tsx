import { ArrowDown } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from './common/Button';
import SocialLinks from './common/SocialLinks';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);

  const fullText = 'Web Developer';

  useEffect(() => {
    let index = 0;
    let mounted = true;
    let erasing = false;
    
    const animate = () => {
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
      
      if (mounted) {
        setTimeout(() => animate(), 100);
      }
    };

    animate();

    return () => {
      mounted = false;
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(() => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    });
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove]);

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
      <div className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
        </div>
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-500 ease-out will-change-transform"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-20 border border-white/20 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-28 h-18 border border-white/20 rounded-lg transform rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-12 h-12 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
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
                Junior Full Stack Developer who loves learning and adopting to our ongoing technological advancements.
                <br /> 
              </p>
            </div>
            
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '2.5s' }}>
              <Button
                onClick={scrollToProjects}
                variant="secondary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">VIEW MY WORK</span>
                <ArrowDown className="relative z-10 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '3s' }}>
            <SocialLinks variant="large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
