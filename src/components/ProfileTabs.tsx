import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";

export const ProfileTabs = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="w-full justify-start bg-card shadow-[var(--shadow-card)] rounded-lg p-1 mb-6">
        <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          About
        </TabsTrigger>
        <TabsTrigger value="projects" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Projects
        </TabsTrigger>
        <TabsTrigger value="experience" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Experience
        </TabsTrigger>
        <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Contact
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="animate-fade-in">
        <AboutSection />
      </TabsContent>

      <TabsContent value="projects" className="animate-fade-in">
        <ProjectsSection />
      </TabsContent>

      <TabsContent value="experience" className="animate-fade-in">
        <ExperienceSection />
      </TabsContent>

      <TabsContent value="contact" className="animate-fade-in">
        <ContactSection />
      </TabsContent>
    </Tabs>
  );
};
