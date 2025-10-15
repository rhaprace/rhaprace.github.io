import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Figma"
  ];

  return (
    <div className="grid gap-6">
      {/* Bio Card */}
      <Card className="shadow-[var(--shadow-card)] border-border">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Passionate full-stack developer with 5+ years of experience building modern web applications. 
            I specialize in creating elegant, user-friendly interfaces and robust backend systems. 
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
            or enjoying a good cup of coffee while reading tech blogs.
          </p>
        </CardContent>
      </Card>

      {/* Skills Card */}
      <Card className="shadow-[var(--shadow-card)] border-border">
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-[var(--shadow-card)] border-border">
          <CardHeader>
            <CardTitle className="text-lg">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">B.S. Computer Science</h4>
                <p className="text-sm text-muted-foreground">Stanford University</p>
                <p className="text-xs text-muted-foreground mt-1">2015 - 2019</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)] border-border">
          <CardHeader>
            <CardTitle className="text-lg">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">English</span>
                <span className="text-sm text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Spanish</span>
                <span className="text-sm text-muted-foreground">Fluent</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">French</span>
                <span className="text-sm text-muted-foreground">Intermediate</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
