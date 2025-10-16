import { TimelineItem } from "@/components/TimelineItem";

const timelineData = [
  {
    type: "work" as const,
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
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">My professional journey and contributions</p>
      </div>

      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};
