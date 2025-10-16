import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeList } from "@/components/BadgeList";
import { Briefcase, GraduationCap, ExternalLink, Smartphone, ChevronDown, ChevronUp } from "lucide-react";

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

export const TimelineItem = ({
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

  return (
    <div className="relative pl-8 pb-12 group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
      <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
      <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
        {type === "work" ? (
          <Briefcase className="w-4 h-4 text-primary" />
        ) : (
          <GraduationCap className="w-4 h-4 text-primary" />
        )}
      </div>
      <div className="ml-6 bg-card border border-border rounded-lg shadow-[var(--shadow-card)] hover:shadow-lg transition-all hover:border-primary/50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
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
                      style={{ animationDelay: `${idx * 50}ms` }}
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
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                <BadgeList items={technologies} />
              </div>
            )}
            {(appLink || websiteLink) && (
              <div className="flex gap-3 pt-2 animate-fade-in" style={{ animationDelay: "150ms" }}>
                {appLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={appLink} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="w-4 h-4 mr-2" />
                      View App
                    </a>
                  </Button>
                )}
                {websiteLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

