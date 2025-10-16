import { Badge } from "@/components/ui/badge";

interface BadgeListProps {
  items: string[];
  className?: string;
}

export const BadgeList = ({ items, className = "" }: BadgeListProps) => {
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

