const Skills = () => {
  const technologies = [
    { name: "React", color: "neon-green", icon: "⚛️" },
    { name: "Next.js", color: "neon-blue", icon: "▲" },
    { name: "TypeScript", color: "neon-purple", icon: "📘" },
    { name: "JavaScript", color: "neon-green", icon: "🟡" },
    { name: "Node.js", color: "neon-green", icon: "🟢" },
    { name: "Express.js", color: "neon-blue", icon: "🚀" },
    { name: "MongoDB", color: "neon-purple", icon: "🍃" },
    { name: "PostgreSQL", color: "neon-blue", icon: "🐘" },
    { name: "Firebase", color: "neon-purple", icon: "🔥" },
    { name: "Tailwind CSS", color: "neon-green", icon: "🎨" },
    { name: "HTML5", color: "neon-blue", icon: "🌐" },
    { name: "CSS3", color: "neon-purple", icon: "🎯" },
    { name: "Git", color: "neon-green", icon: "📚" },
    { name: "Vite", color: "neon-blue", icon: "⚡" },
    { name: "Socket.io", color: "neon-purple", icon: "🔌" }
  ];
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
              TECH STACK
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies I use to build modern, scalable, and performant web applications
          </p>
        </div>        
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10"></div>
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group/tech flex-shrink-0 mx-4"
              >
                <div className={`
                  relative bg-card/50 backdrop-blur-sm border border-${tech.color}/30
                  hover:border-${tech.color}/60 hover:bg-card/70 transition-all duration-300
                  hover:shadow-lg hover:shadow-${tech.color}/20 rounded-lg px-6 py-4
                  flex items-center space-x-3 cursor-pointer group-hover/tech:scale-105
                `}>
                  <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </span>
                  <span className={`
                    font-medium text-${tech.color} whitespace-nowrap
                    group-hover/tech:text-white transition-colors duration-300
                  `}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-[scroll_25s_linear_infinite_reverse] hover:[animation-play-state:paused] mt-8">
            {duplicatedTech.reverse().map((tech, index) => (
              <div
                key={`${tech.name}-reverse-${index}`}
                className="group/tech flex-shrink-0 mx-4"
              >
                <div className={`
                  relative bg-card/50 backdrop-blur-sm border border-${tech.color}/30
                  hover:border-${tech.color}/60 hover:bg-card/70 transition-all duration-300
                  hover:shadow-lg hover:shadow-${tech.color}/20 rounded-lg px-6 py-4
                  flex items-center space-x-3 cursor-pointer group-hover/tech:scale-105
                `}>
                  <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </span>
                  <span className={`
                    font-medium text-${tech.color} whitespace-nowrap
                    group-hover/tech:text-white transition-colors duration-300
                  `}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;