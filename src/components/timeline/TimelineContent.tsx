import { memo } from "react";
import { BadgeList } from "@/components/BadgeList";
import { TimelineLinks } from "./TimelineLinks";
import { ANIMATION_DELAYS } from "@/constants/animations";

interface TimelineContentProps {
  description: string | string[];
  technologies?: string[];
  appLink?: string;
  websiteLink?: string;
  isExpanded: boolean;
}

const TimelineContentComponent = ({
  description,
  technologies,
  appLink,
  websiteLink,
  isExpanded,
}: TimelineContentProps) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-6 pb-6 space-y-4 border-t border-border/50 pt-4">
        <div>
          {Array.isArray(description) ? (
            <ul className="space-y-2">
              {description.map((item, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground leading-relaxed flex items-start animate-fade-in"
                  style={{ animationDelay: `${idx * ANIMATION_DELAYS.DESCRIPTION_ITEM}ms` }}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
        {technologies && technologies.length > 0 && (
          <div
            className="animate-fade-in"
            style={{ animationDelay: `${ANIMATION_DELAYS.TECHNOLOGIES}ms` }}
          >
            <h4 className="text-sm font-medium mb-2">Technologies:</h4>
            <BadgeList items={technologies} />
          </div>
        )}
        <TimelineLinks appLink={appLink} websiteLink={websiteLink} />
      </div>
    </div>
  );
};

export const TimelineContent = memo(TimelineContentComponent);

