import { ExternalLink, Github, Dumbbell, FileText } from 'lucide-react';
import { useState, useMemo } from 'react';
import atletech from '../assets/atletech-bg.png';
import jsDocs from '../assets/js-docs.png';
import SectionContainer from './common/SectionContainer';
import Card from './common/Card';
import TechBadge from './common/TechBadge';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  icon: React.ElementType;
  featured: boolean;
  image?: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects = useMemo<Project[]>(() => [
    {
      title: "Atletech - AI Fitness App",
      description: "AI-powered fitness application that helps users track their weight based on personal goals. Features customizable meal plans and workout routines tailored to individual fitness objectives and preferences.",
      tech: ["React", "AI/ML", "JavaScript", "CSS"],
      github: "https://github.com/rhaprace/Atletech",
      live: "http://atletechteam.netlify.app/",
      category: "Web App",
      icon: Dumbbell,
      featured: true,
      image: atletech
    },
    {
      title: "JavaScript Basics Documentation",
      description: "A comprehensive documentation website designed to help beginners learn JavaScript fundamentals. Features interactive examples, clear explanations, and structured learning paths covering everything from basic syntax to advanced concepts.",
      tech: ["JavaScript", "HTML", "CSS", "Documentation"],
      github: "#",
      live: "https://js-docs-tau.vercel.app/",
      category: "Documentation",
      icon: FileText,
      featured: true,
      image: jsDocs
    },
  ], []);

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    return cats;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <SectionContainer
      id="projects"
      title="PROJECTS"
      subtitle="Here are some of my featured projects that showcase my skills and experience"
      backgroundVariant="gradient"
    >
      <div 
        className="flex overflow-x-auto overflow-y-hidden hide-scrollbar py-2 mb-6 sm:mb-8 justify-start sm:justify-center gap-2 sm:gap-3 sm:flex-wrap mx-auto"
        role="group"
        aria-label="Project category filters"
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex-none px-4 py-2 rounded-lg border transition-all duration-300 text-sm whitespace-nowrap
              ${selectedCategory === category 
                ? 'border-white text-white bg-white/10' 
                : 'border-border/50 text-gray-300 hover:border-white/50 hover:text-white'}`}
            aria-pressed={selectedCategory === category}
            aria-label={`Filter by ${category} projects`}
          >
            {category}
          </button>
        ))}
      </div>

      <div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        role="list"
        aria-label="Projects grid"
      >
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="group"
            style={{
              opacity: 0,
              animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`
            }}
            role="listitem"
          >
            <Card variant="glass" padding="lg" className="overflow-hidden">
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg mb-6">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center rounded-lg">
                    <project.icon className="h-16 w-16 text-white/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white border border-border/50 hover:border-white/50 transition-all duration-300"
                      title="View Code"
                      aria-label={`View code for ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 backdrop-blur-sm rounded-lg text-muted-foreground hover:text-neon-blue border border-border/50 hover:border-neon-blue/50 transition-all duration-300"
                      title="Live Demo"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" aria-hidden="true">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-lg text-primary" tabIndex={0}>
                    {project.title}
                  </h3>
                </div>
                
                <p 
                  className="text-sm text-muted-foreground leading-relaxed"
                  tabIndex={0}
                >
                  {project.description}
                </p>
                
                <div 
                  className="flex flex-wrap gap-2"
                  role="group"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} variant="primary" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;