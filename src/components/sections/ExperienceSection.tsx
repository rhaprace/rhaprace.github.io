import { TimelineItem } from "@/components/TimelineItem";
import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">My professional journey and contributions</p>
      </div>

      <div className="relative">
        {experiences.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};
