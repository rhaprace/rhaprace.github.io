import React from 'react';
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

  return (
    <SectionContainer
      id="certifications"
      title="CERTIFICATIONS"
      subtitle="Professional certifications and achievements"
      backgroundVariant="gradient"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group"
            style={{
              opacity: 0,
              animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`
            }}
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card
                variant="glass"
                padding="md"
                className="h-full flex flex-col"
              >
                <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-2 flex-1">{cert.title}</h3>
                  <div className="flex justify-between items-center text-gray-300 mt-auto">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Certifications;
