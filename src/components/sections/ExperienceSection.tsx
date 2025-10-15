import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Leading development of microservices architecture and mentoring junior developers. Improved application performance by 40%.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2019 - 2021",
    description: "Built and deployed multiple client projects using React and Node.js. Implemented CI/CD pipelines and automated testing.",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2017 - 2019",
    description: "Created responsive web applications and landing pages for various clients. Collaborated with designers to implement pixel-perfect UIs.",
  },
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
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="text-base mt-1">
                  {exp.company} • {exp.period}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
