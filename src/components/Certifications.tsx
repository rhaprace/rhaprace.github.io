import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import backendCert from '../assets/BackEnd and API.png';
import responsiveWebCert from '../assets/Responsive Web Design.png';
import javascriptCert from '../assets/JavaScript Algorithm and Data Structures.png';
import frontendCert from '../assets/Front End Development Libraries.png';
import SectionContainer from './common/SectionContainer';
import Card from './common/Card';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
}

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <SectionContainer
      id="certifications"
      title="CERTIFICATIONS"
      subtitle="Professional certifications and achievements"
      backgroundVariant="gradient"
    >
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
                className="block"
              >
                <Card 
                  variant="glass" 
                  padding="md"
                  className="group-hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Certifications;
