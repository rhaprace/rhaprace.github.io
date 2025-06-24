import { useState, useEffect, useMemo } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Code, Heart } from 'lucide-react';

const Footer = () => {
  const floatingElements = useMemo(() => [
    { icon: Code, size: 'lg', color: 'neon-blue' },
    { icon: Heart, size: 'sm', color: 'neon-purple' },
    { icon: Github, size: 'md', color: 'neon-green' },
    { icon: Code, size: 'sm', color: 'neon-blue' },
    { icon: Heart, size: 'lg', color: 'neon-purple' },
    { icon: Linkedin, size: 'md', color: 'neon-green' },
  ], []);

  const [floatingIcons, setFloatingIcons] = useState<{
    Icon: typeof Code;
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
      opacity: number;
      size: string;
      color: string;
    };
  }[]>([]);

  useEffect(() => {
    const icons = floatingElements.map(({ icon, size, color }) => ({
      Icon: icon,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.05,
        size: size === 'sm' ? '2rem' : size === 'md' ? '3rem' : '4rem',
        color,
      },
    }));
    setFloatingIcons(icons);
  }, [floatingElements]);

  return (
    <footer className="bg-background border-t border-border/30 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute animate-float-slow"
            style={{
              ...item.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <item.Icon 
              style={{ 
                width: item.style.size, 
                height: item.style.size 
              }} 
              className={`text-${item.style.color}`} 
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-4">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              Frontend developer passionate about crafting modern, responsive web experiences.
              I specialize in React, TypeScript, and cutting-edge web technologies to bring creative visions to life.
              Always eager to tackle new challenges and collaborate on innovative projects.
            </p>
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon-blue" />
                <a
                  href="mailto:rhaprace@gmail.com"
                  className="text-neon-blue hover:text-neon-green transition-colors duration-300"
                >
                  rhaprace@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neon-blue" />
                <span className="text-muted-foreground">(+63) 969 644 6743</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-neon-blue" />
                <span className="text-muted-foreground">Subic, Philippines</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rafael-race-54033719b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 border border-border/50 flex items-center justify-center hover:border-neon-blue hover:text-neon-blue transition-all duration-300 rounded"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/rhaprace"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 border border-border/50 flex items-center justify-center hover:border-neon-blue hover:text-neon-blue transition-all duration-300 rounded"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Rafael Race. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;