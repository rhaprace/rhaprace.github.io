import { Mail, MapPin, Phone } from 'lucide-react';
import SocialLinks from './common/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>

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
            <SocialLinks variant="minimal" />
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