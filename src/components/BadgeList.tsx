import { memo } from "react";
import { Badge } from "@/components/ui/badge";

interface BadgeListProps {
  items: readonly string[];
  className?: string;
}

const BadgeListComponent = ({ items, className = "" }: BadgeListProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <Badge key={item} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  );
};

export const BadgeList = memo(BadgeListComponent);

