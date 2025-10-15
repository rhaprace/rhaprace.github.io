import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  const skills = [
    "React", "React Native", "Node.js", "JavaScript", "Supabase",
    "PostgreSQL", "MongoDB", "Docker", "Git", "Tailwind CSS", "Expo"
  ];

  return (
    <div className="grid gap-6">
      <Card className="shadow-[var(--shadow-card)] border-border">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Hi there! I'm Rafael, a junior full-stack developer with a hobby for creating things in my mind. 
            When I'm not coding, you'll find me exploring new technologies, Also enjoying a good cup of coffee.
            I'm always making myself face new challenges and learn new things. I'm a big fan of clean code and applying principles of writing maintainable
            and high value quality code.
          </p>
        </CardContent>
      </Card>
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
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-[var(--shadow-card)] border-border">
          <CardHeader>
            <CardTitle className="text-lg">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">B.S. Information Technology</h4>
                <p className="text-sm text-muted-foreground">Central Luzon College of Sciende and Technology</p>
                <p className="text-xs text-muted-foreground mt-1">2022 - Present</p>
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
                <span className="font-medium">Tagalog</span>
                <span className="text-sm text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">English</span>
                <span className="text-sm text-muted-foreground">Conversational</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
