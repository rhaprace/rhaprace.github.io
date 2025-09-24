import { useState } from 'react';
import { Menu, X} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 64;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/50 z-50 will-change-transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <span className="font-orbitron font-bold text-xl">
              <span className="group relative inline-flex items-center space-x-1">
                <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300">&lt;</span>
                <span className="inline-flex">
                  <span className="text-white">R</span>
                  <span className="text-white group-hover:animate-pulse">A</span>
                  <span className="text-white">C</span>
                  <span className="text-white group-hover:animate-pulse">E</span>
                </span>
                <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300">/&gt;</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>
            </span>
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer relative group"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
