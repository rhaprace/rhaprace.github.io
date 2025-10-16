import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
const TAB_TRIGGER_CLASS = "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground";

export const ProfileTabs = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="w-full justify-start bg-card shadow-[var(--shadow-card)] rounded-lg p-1 mb-6">
        <TabsTrigger value="about" className={TAB_TRIGGER_CLASS}>
          About
        </TabsTrigger>
        <TabsTrigger value="projects" className={TAB_TRIGGER_CLASS}>
          Projects
        </TabsTrigger>
        <TabsTrigger value="experience" className={TAB_TRIGGER_CLASS}>
          Experience
        </TabsTrigger>
        <TabsTrigger value="contact" className={TAB_TRIGGER_CLASS}>
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
