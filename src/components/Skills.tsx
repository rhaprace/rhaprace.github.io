const Skills = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "🟡" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Firebase", icon: "🔥" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎯" },
    { name: "Git", icon: "📚" },
    { name: "Vite", icon: "⚡" },
    { name: "Socket.io", icon: "🔌" }
  ];
  const duplicatedTech = [...technologies, ...technologies];

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
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10"></div>
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group/tech flex-shrink-0 mx-4"
              >
                <div className="
                  relative bg-card/50 backdrop-blur-sm border border-white/20
                  hover:border-white/40 hover:bg-card/70 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/10 rounded-lg px-6 py-4
                  flex items-center space-x-3 cursor-pointer group-hover/tech:scale-105
                ">
                  <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                    {tech.icon}
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
          <div className="flex animate-[scroll_25s_linear_infinite_reverse] hover:[animation-play-state:paused] mt-8">
            {duplicatedTech.reverse().map((tech, index) => (
              <div
                key={`${tech.name}-reverse-${index}`}
                className="group/tech flex-shrink-0 mx-4"
              >
                <div className="
                  relative bg-card/50 backdrop-blur-sm border border-white/20
                  hover:border-white/40 hover:bg-card/70 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/10 rounded-lg px-6 py-4
                  flex items-center space-x-3 cursor-pointer group-hover/tech:scale-105
                ">
                  <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                    {tech.icon}
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
        </div>
      </div>
    </section>
  );
};


export default Skills;