import { ExternalLink, Github, Dumbbell, FileText } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import atletech from '../assets/atletech-bg.png'
import jsDocs from '../assets/js-docs.png'
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
      description: "A comprehensive documentation website designed to help beginners learn JavaScript fundamentals. Features interactive examples, clear explanations, and structured learning paths covering everything from basic syntax to advanced concepts. Built with modern web technologies to provide an optimal learning experience for new developers.",
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

  const floatingElements = useMemo(() => [
    { type: 'window', size: 'lg', content: '<div>' },
    { type: 'window', size: 'md', content: 'const' },
    { type: 'window', size: 'sm', content: '{ }' },
    { type: 'editor', size: 'lg', content: '</>' },
    { type: 'terminal', size: 'md', content: '$_' },
    { type: 'window', size: 'sm', content: '()' },
    { type: 'editor', size: 'md', content: 'npm' },
    { type: 'terminal', size: 'sm', content: '>' },
  ], []);

  const [floatingShapes, setFloatingShapes] = useState<{
    type: string;
    content: string;
    style: {
      left: string;
      top: string;
      width: string;
      height: string;
      animationDuration: string;
      animationDelay: string;
      opacity: number;
    };
  }[]>([]);

  useEffect(() => {
    const shapes = floatingElements.map(({ type, size, content }) => ({
      type,
      content,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: size === 'sm' ? '100px' : size === 'md' ? '150px' : '200px',
        height: size === 'sm' ? '60px' : size === 'md' ? '80px' : '100px',
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.1,
      },
    }));
    setFloatingShapes(shapes);
  }, [floatingElements]);

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-20 relative overflow-hidden"
      aria-label="Projects Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <div
            key={index}
            className="absolute border border-white/20 rounded-lg backdrop-blur-sm animate-float-slow"
            style={{
              ...shape.style,
              transform: 'translate(-50%, -50%)',
            }}
          >              <div className="h-6 bg-card/30 border-b border-white/20 flex items-center px-3">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="p-3 font-mono text-sm">
              {shape.content}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 text-white" tabIndex={0}>
            PROJECTS
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4" tabIndex={0}>
            Here are some of my featured projects that showcase my skills and experience
          </p>
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
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          role="list"
          aria-label="Projects grid"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden group hover:border-white/50 transition-all duration-300 hover:bg-card/50 hover:shadow-xl hover:shadow-white/10"
              style={{
                opacity: 0,
                animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`
              }}
              role="listitem"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-white/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" aria-hidden="true">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-lg text-primary" tabIndex={0}>
                    {project.title}
                  </h3>
                </div>
                
                <p 
                  className="text-sm text-muted-foreground leading-relaxed mb-4"
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
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      role="term"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Projects;