import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import backendCert from '../assets/BackEnd and API.png';
import responsiveWebCert from '../assets/Responsive Web Design.png';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
}

const Certifications = () => {
  const certificates: Certificate[] = [
    {
      title: "Backend Development and APIs",
      issuer: "freeCodeCamp",
      date: "2023",
      image: backendCert,
      url: "https://www.freecodecamp.org/certification/rhaprace_1211/back-end-development-and-apis"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      image: responsiveWebCert,
      url: "https://www.freecodecamp.org/certification/rhaprace_1211/responsive-web-design"
    },
  ];
  const containerRef = useMemo(() => ({ current: null as HTMLDivElement | null }), []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };
  const floatingElements = useMemo(() => [
    { type: 'badge', content: '🏆', size: 'lg' },
    { type: 'star', content: '⭐', size: 'md' },
    { type: 'medal', content: '🎖️', size: 'sm' },
    { type: 'badge', content: '🏅', size: 'lg' },
    { type: 'star', content: '✨', size: 'sm' },
    { type: 'medal', content: '📜', size: 'md' },
  ], []);

  const [floatingShapes, setFloatingShapes] = useState<{
    type: string;
    content: string;
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
      opacity: number;
      fontSize: string;
    };
  }[]>([]);

  useEffect(() => {
    const shapes = floatingElements.map(({ type, content, size }) => ({
      type,
      content,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.1,
        fontSize: size === 'sm' ? '2rem' : size === 'md' ? '3rem' : '4rem',
      },
    }));
    setFloatingShapes(shapes);
  }, [floatingElements]);

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <div
            key={index}
            className="absolute animate-float-slow"
            style={{
              ...shape.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {shape.content}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
            My Certifications
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Professional certifications and achievements
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border/50 hover:border-neon-blue/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground hover:text-neon-blue" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border/50 hover:border-neon-blue/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground hover:text-neon-blue" />
          </button>
          <div
            ref={containerRef}
            className="overflow-x-auto hide-scrollbar relative flex gap-8 px-4 pb-4 snap-x snap-mandatory scroll-smooth"
            onScroll={() => {}}
          >
            {certificates.map(cert => (
              <div
                key={cert.title}
                className="snap-center flex-shrink-0 w-[400px]"
              >
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden rounded-lg border border-border/50 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-blue/10"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certification`}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 p-6">
                    <span className="text-neon-blue font-medium text-lg mb-2">{cert.title}</span>
                    <span className="text-muted-foreground text-sm mb-4">
                      {cert.issuer} • {cert.date}
                    </span>
                    <span className="px-6 py-3 border border-neon-blue/50 rounded-lg backdrop-blur-sm text-neon-blue">
                      View Certificate
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Certifications;
