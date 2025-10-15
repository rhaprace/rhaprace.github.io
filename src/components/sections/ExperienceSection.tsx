import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, ExternalLink, Smartphone } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Junior Full Stack Developer",
    company: "Map Lab",
    location: "Remote",
    period: "2025 – Present",
    current: true,
    description: [
      "Developing Lexi Quest, a quest based React Native language learning app.",
      "Built features for AI-powered phrase building, vocabulary exploration, and cultural deep-dives.",
      "Enhanced app UI/UX, making language learning engaging and interactive."
    ],
    technologies: ["React Native", "Supabase", "PowerSync", "TypeScript", "Expo", "EAS", "Github Actions", "Docker"],
    appLink: "https://apps.apple.com/au/app/lexiquest/id6550892623",
    websiteLink: "https://www.lexiquest.app"
  }
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="shadow-[var(--shadow-card)] border-border hover:border-primary/50 transition-colors"
        >
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                {exp.type === "work" ? (
                  <Briefcase className="w-5 h-5 text-primary" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {exp.company} • {exp.location} • {exp.period}
                      {exp.current && <span className="ml-2 text-green-600 font-medium">Current</span>}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              {Array.isArray(exp.description) ? (
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              )}
            </div>

            {exp.technologies && (
              <div>
                <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {(exp.appLink || exp.websiteLink) && (
              <div className="flex gap-3 pt-2">
                {exp.appLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={exp.appLink} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="w-4 h-4 mr-2" />
                      View App
                    </a>
                  </Button>
                )}
                {exp.websiteLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={exp.websiteLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
