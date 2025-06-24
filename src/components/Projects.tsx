import { ExternalLink, Github, ShoppingCart, Calendar, Dumbbell } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

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
      title: "Full-Stack Event Management Platform",
      description: "A comprehensive web application built with React.js and Node.js that enables educational institutions to efficiently manage events, registrations, and user roles. Features real-time notifications, secure authentication, file uploads, analytics dashboards, and role-based access control for admins, organizers, and students.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      category: "Full-Stack",
      icon: Calendar,
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include product management, cart functionality, and secure payments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "React", "TypeScript", "Stripe"],
      github: "#",
      live: "#",
      category: "Full-Stack",
      icon: ShoppingCart,
      featured: true
    },
    {
      title: "Atletech - AI Fitness App",
      description: "AI-powered fitness application that helps users track their weight based on personal goals. Features customizable meal plans and workout routines tailored to individual fitness objectives and preferences.",
      tech: ["React", "AI/ML", "JavaScript", "CSS"],
      github: "#",
      live: "http://atletechteam.netlify.app/",
      category: "Web App",
      icon: Dumbbell,
      featured: true
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
      className="py-20 relative overflow-hidden"
      aria-label="Projects Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <div
            key={index}
            className="absolute border border-neon-blue/20 rounded-lg backdrop-blur-sm animate-float-slow"
            style={{
              ...shape.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="h-6 bg-card/30 border-b border-neon-blue/20 flex items-center px-3">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-neon-purple/20" />
                <div className="w-2 h-2 rounded-full bg-neon-blue/20" />
                <div className="w-2 h-2 rounded-full bg-neon-green/20" />
              </div>
            </div>
            <div className="p-3 font-mono text-sm">
              {shape.content}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6" tabIndex={0}>
            PROJECTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" tabIndex={0}>
            Here are some of my featured projects that showcase my skills and experience
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8" role="group" aria-label="Project category filters">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm 
                  ${selectedCategory === category 
                    ? 'border-neon-blue text-neon-blue bg-neon-blue/10' 
                    : 'border-border/50 text-muted-foreground hover:border-neon-blue/50 hover:text-neon-blue'}`}
                aria-pressed={selectedCategory === category}
                aria-label={`Filter by ${category} projects`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div 
          className="grid md:grid-cols-2 gap-8 auto-rows-fr"
          role="list"
          aria-label="Projects grid"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 group hover:border-primary/50 transition-all duration-300 hover:bg-card/50 flex flex-col"
              style={{
                opacity: 0,
                animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`
              }}
              role="listitem"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" aria-hidden="true">
                    <project.icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-orbitron font-semibold text-base text-primary truncate" tabIndex={0}>
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground" role="doc-subtitle">{project.category}</span>
                  </div>
                </div>
                <div className="flex space-x-2 flex-shrink-0 ml-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-neon-green transition-colors duration-300"
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
                      className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
                      title="Live Demo"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
              <div className="mb-4 flex-grow">
                <p 
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                  tabIndex={0}
                >
                  {project.description}
                </p>
              </div>
              <div 
                className="flex flex-wrap gap-2"
                role="group"
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    role="term"
                  >
                    {tech}
                  </span>
                ))}
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