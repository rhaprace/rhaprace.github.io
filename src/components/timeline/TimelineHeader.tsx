import { memo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineHeaderProps {
  title: string;
  company?: string;
  location: string;
  period: string;
  current?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineHeaderComponent = ({
  title,
  company,
  location,
  period,
  current,
  isExpanded,
  onToggle,
}: TimelineHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-t-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {company && <span className="font-medium">{company}</span>}
            {company && <span>•</span>}
            <span>{location}</span>
            <span>•</span>
            <span>{period}</span>
            {current && (
              <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                Current
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </div>
    </button>
  );
};

export const TimelineHeader = memo(TimelineHeaderComponent);

