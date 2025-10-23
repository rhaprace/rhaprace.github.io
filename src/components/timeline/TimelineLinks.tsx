import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, ExternalLink } from "lucide-react";
import { ANIMATION_DELAYS } from "@/constants/animations";

interface TimelineLinksProps {
  appLink?: string;
  websiteLink?: string;
}

const TimelineLinksComponent = ({ appLink, websiteLink }: TimelineLinksProps) => {
  if (!appLink && !websiteLink) return null;

  return (
    <div
      className="flex gap-3 pt-2 animate-fade-in"
      style={{ animationDelay: `${ANIMATION_DELAYS.LINKS}ms` }}
    >
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
  );
};

export const TimelineLinks = memo(TimelineLinksComponent);

