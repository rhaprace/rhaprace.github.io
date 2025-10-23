import { MapPin } from "lucide-react";
import { EmailButton } from "./EmailButton";

interface ProfileInfoProps {
  name: string;
  title: string;
  location: string;
  email: string;
  isMobile?: boolean;
}

export const ProfileInfo = ({
  name,
  title,
  location,
  email,
  isMobile = false,
}: ProfileInfoProps) => {
  const nameSize = isMobile ? "text-2xl" : "text-3xl";
  const titleSize = isMobile ? "text-base" : "text-lg";
  const textAlign = isMobile ? "text-center" : "";
  const containerClass = isMobile ? "w-full px-2" : "flex-1";
  const infoLayout = isMobile ? "flex-col gap-3" : "flex-wrap gap-3 mt-3";

  return (
    <div className={containerClass}>
      <h1 className={`${nameSize} font-bold text-black dark:text-white ${isMobile ? "mb-2" : "mb-1"} ${textAlign}`}>
        {name}
      </h1>
      <p className={`${titleSize} text-muted-foreground ${textAlign}`}>
        {title}
      </p>

      <div className={`flex ${infoLayout} text-sm text-muted-foreground ${isMobile ? "justify-center" : ""}`}>
        <div className={`flex items-center ${isMobile ? "justify-center" : ""} gap-${isMobile ? "2" : "1"}`}>
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{location}</span>
        </div>
        <div className={`flex items-center ${isMobile ? "justify-center" : ""} gap-${isMobile ? "2" : "1"}`}>
          <EmailButton email={email} />
        </div>
      </div>
    </div>
  );
};

