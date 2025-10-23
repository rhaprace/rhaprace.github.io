import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
import { TABS, TAB_TRIGGER_CLASS } from "@/config/tabs";

const TAB_COMPONENTS = {
  about: AboutSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  contact: ContactSection,
};

export const ProfileTabs = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="w-full justify-center md:justify-start bg-card shadow-[var(--shadow-card)] rounded-lg p-1 mb-6">
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={TAB_TRIGGER_CLASS}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {TABS.map((tab) => {
        const Component = TAB_COMPONENTS[tab.value as keyof typeof TAB_COMPONENTS];
        return (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="animate-fade-in flex justify-center"
          >
            <div className="w-full">
              <Component />
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
