import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import backendCert from '../assets/BackEnd and API.png';
import responsiveWebCert from '../assets/Responsive Web Design.png';
import javascriptCert from '../assets/JavaScript Algorithm and Data Structures.png';
import frontendCert from '../assets/Front End Development Libraries.png';
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
      {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      image: javascriptCert,
      url: "https://www.freecodecamp.org/certification/rhaprace_1211/javascript-algorithms-and-data-structures-v8"
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "2023",
      image: frontendCert,
      url: "https://www.freecodecamp.org/certification/rhaprace_1211/front-end-development-libraries"
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
            className="absolute animate-float"
            style={{
              ...shape.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {shape.content}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4">
            <span className="text-white">CERTIFICATIONS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-white/0 via-white/50 to-white/0 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-gray-300 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/10 hover:border-white/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-gray-300 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/10 hover:border-white/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth py-8 px-4 hide-scrollbar"
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-center group"
              >
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-card/50 backdrop-blur-sm border border-white/20 
                    hover:border-white/40 rounded-lg p-4 transition-all duration-300
                    hover:shadow-lg hover:shadow-white/10 group-hover:scale-[1.02]"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
