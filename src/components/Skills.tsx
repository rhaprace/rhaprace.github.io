import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiSupabase,
  SiExpo,
} from "react-icons/si";
import SectionContainer from './common/SectionContainer';
import Card from './common/Card';
import Button from './common/Button';

const Skills = () => {
  const technologies: { name: string; icon: IconType }[] = [
    { name: "React", icon: SiReact },
    { name: "React Native", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Supabase", icon: SiSupabase },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "Git", icon: SiGit },
    { name: "Expo", icon: SiExpo }
  ];
  
  const [showAll, setShowAll] = useState(false);
  const visibleTechnologies = showAll ? technologies : technologies.slice(0, 5);

  return (
    <SectionContainer
      id="skills"
      title="TECH STACK"
      subtitle="Technologies I use to build modern, scalable, and performant web applications"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {visibleTechnologies.map((tech) => (
            <div key={tech.name} className="group/tech">
              <Card 
                className="flex items-center space-x-3 cursor-pointer group-hover/tech:scale-105"
                padding="md"
              >
                <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                  <tech.icon className="text-2xl" />
                </span>
                <span className="font-medium text-gray-300 whitespace-nowrap group-hover/tech:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </Card>
            </div>
          ))}
        </div>

        {technologies.length > 5 && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show less' : 'Show more'}
            </Button>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Skills;