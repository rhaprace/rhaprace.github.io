import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  const technologies: { name: string; icon: IconType }[] = [
    { name: "React", icon: SiReact },
    { name: "React Native", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Git", icon: SiGit },
  ];
  const [showAll, setShowAll] = useState(false);
  const visibleTechnologies = showAll ? technologies : technologies.slice(0, 5);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4">
            <span className="text-white">TECH STACK</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-white/0 via-white/50 to-white/0 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technologies I use to build modern, scalable, and performant web applications
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {visibleTechnologies.map((tech) => (
              <div key={tech.name} className="group/tech">
                <div className="
                  relative bg-card/50 backdrop-blur-sm border border-white/20
                  hover:border-white/40 hover:bg-card/70 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/10 rounded-lg px-6 py-4
                  flex items-center space-x-3 cursor-pointer group-hover/tech:scale-105
                ">
                  <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                    <tech.icon className="text-2xl" />
                  </span>
                  <span className="
                    font-medium text-gray-300 whitespace-nowrap
                    group-hover/tech:text-white transition-colors duration-300
                  ">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {technologies.length > 5 && (
            <div className="mt-10 flex justify-center">
              {!showAll ? (
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 rounded-md border border-white/30 text-white/90 hover:text-white hover:border-white/60 hover:bg-white/5 transition-colors"
                >
                  Show more
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowAll(false)}
                  className="px-6 py-3 rounded-md border border-white/30 text-white/90 hover:text-white hover:border-white/60 hover:bg-white/5 transition-colors"
                >
                  Show less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default Skills;