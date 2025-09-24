import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionContainer from './common/SectionContainer';
import Card from './common/Card';
import TechBadge from './common/TechBadge';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
  appLink?: string;
  websiteLink?: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Junior Full Stack Developer",
      company: "Map Lab",
      location: "Remote",
      period: "2025 – Present",
      current: true,
      description: [
        "Collaborated with Felix to develop Lexi Quest, a quest based React Native language learning app.",
        "Built features for AI-powered phrase building, vocabulary exploration, and cultural deep-dives.",
        "Enhanced app UI/UX, making language learning engaging and interactive."
      ],
      technologies: ["React Native", "Supabase", "PowerSync", "TypeScript", "Expo", "EAS", "Github Actions", "Docker"],
      appLink: "https://apps.apple.com/au/app/lexiquest/id6550892623",
      websiteLink: "https://www.lexiquest.app"
    }
  ];

  return (
    <SectionContainer
      id="experience"
      title="EXPERIENCE"
      subtitle="Professional journey and key contributions in software development"
      backgroundVariant="gradient"
    >
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group"
            style={{
              opacity: 0,
              animation: `fade-in 0.5s ease-out forwards ${index * 0.2}s`
            }}
          >
            <Card 
              variant="glass" 
              padding="lg"
              className="group-hover:scale-[1.02] transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-semibold text-xl text-primary">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <p className="text-lg text-white font-medium">
                            {experience.company}
                          </p>
                          <div className="flex items-center gap-2">
                            {experience.websiteLink && (
                              <a
                                href={experience.websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30 hover:bg-green-500/30 hover:text-green-300 transition-all duration-300"
                              >
                                <span>Website</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            {experience.appLink && (
                              <a
                                href={experience.appLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300"
                              >
                                <span>App Store</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} variant="secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
