import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ExternalLinkButtonProps {
  href: string;
  label: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const ExternalLinkButton = ({
  href,
  label,
  variant = "outline",
  size = "sm",
  className = "",
}: ExternalLinkButtonProps) => {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        {label}
        <ExternalLink className="w-4 h-4" />
      </a>
    </Button>
  );
};

