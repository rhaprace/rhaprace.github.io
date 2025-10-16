import { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
}

export const ContactLink = ({ 
  href, 
  icon, 
  label, 
  external = true 
}: ContactLinkProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:bg-accent hover:border-primary transition-colors group"
    >
      <div className="text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-foreground group-hover:text-accent-foreground font-medium transition-colors">
        {label}
      </span>
    </a>
  );
};

