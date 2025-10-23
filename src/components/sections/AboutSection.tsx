import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeList } from "@/components/BadgeList";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { languages } from "@/data/languages";

export const AboutSection = () => {

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
          <BadgeList items={skills} />
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
                <h4 className="font-semibold">{education.degree}</h4>
                <p className="text-sm text-muted-foreground">{education.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{education.period}</p>
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
              {languages.map((language) => (
                <div key={language.name} className="flex justify-between">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm text-muted-foreground">{language.proficiency}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
