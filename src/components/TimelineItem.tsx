import { useState, memo, useCallback } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { TimelineHeader } from "@/components/timeline/TimelineHeader";
import { TimelineContent } from "@/components/timeline/TimelineContent";
import { ANIMATION_DELAYS } from "@/constants/animations";

interface TimelineItemProps {
  type: "work" | "education";
  title: string;
  company?: string;
  location: string;
  period: string;
  current?: boolean;
  description: string | string[];
  technologies?: string[];
  appLink?: string;
  websiteLink?: string;
  index: number;
}

const TimelineItemComponent = ({
  type,
  title,
  company,
  location,
  period,
  current,
  description,
  technologies,
  appLink,
  websiteLink,
  index,
}: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div
      className="relative pl-8 pb-12 group animate-fade-in"
      style={{ animationDelay: `${index * ANIMATION_DELAYS.TIMELINE_ITEM}ms` }}
    >
      <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
      <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
        {type === "work" ? (
          <Briefcase className="w-4 h-4 text-primary" />
        ) : (
          <GraduationCap className="w-4 h-4 text-primary" />
        )}
      </div>
      <div className="ml-6 bg-card border border-border rounded-lg shadow-[var(--shadow-card)] hover:shadow-lg transition-all hover:border-primary/50">
        <TimelineHeader
          title={title}
          company={company}
          location={location}
          period={period}
          current={current}
          isExpanded={isExpanded}
          onToggle={handleToggle}
        />
        <TimelineContent
          description={description}
          technologies={technologies}
          appLink={appLink}
          websiteLink={websiteLink}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};

export const TimelineItem = memo(TimelineItemComponent);

