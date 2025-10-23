import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileInfo } from "@/components/profile/ProfileInfo";
import { ProfileActions } from "@/components/profile/ProfileActions";
import { CONTACT_INFO } from "@/config/contact";
import coverImage from "@/assets/cover.png";
import profileImage from "@/assets/profile.jpg";

const PROFILE_NAME = "Rafael Race";
const PROFILE_TITLE = "Junior Full Stack Developer";
const AVATAR_FALLBACK = "RR";

export const ProfileHeader = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] mb-6">
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt="Cover"
          loading="eager"
          decoding="async"
          className="w-full h-auto object-contain"
          {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
        />
      </div>
      <div className="px-4 sm:px-6 pb-6">
        <div className="flex md:hidden flex-col items-center gap-6 -mt-16 pt-2">
          <Avatar className="w-32 h-32 border-4 border-card shadow-lg">
            <AvatarImage src={profileImage} alt={PROFILE_NAME} className="object-cover" />
            <AvatarFallback>{AVATAR_FALLBACK}</AvatarFallback>
          </Avatar>

          <ProfileInfo
            name={PROFILE_NAME}
            title={PROFILE_TITLE}
            location={CONTACT_INFO.location}
            email={CONTACT_INFO.email}
            isMobile={true}
          />

          <ProfileActions
            email={CONTACT_INFO.email}
            subject={CONTACT_INFO.subject}
            isMobile={true}
          />
        </div>
        <div className="hidden md:flex flex-row gap-6 items-end -mt-16">
          <Avatar className="w-32 h-32 border-4 border-card shadow-lg flex-shrink-0">
            <AvatarImage src={profileImage} alt={PROFILE_NAME} className="object-cover" />
            <AvatarFallback>{AVATAR_FALLBACK}</AvatarFallback>
          </Avatar>

          <ProfileInfo
            name={PROFILE_NAME}
            title={PROFILE_TITLE}
            location={CONTACT_INFO.location}
            email={CONTACT_INFO.email}
            isMobile={false}
          />

          <ProfileActions
            email={CONTACT_INFO.email}
            subject={CONTACT_INFO.subject}
            isMobile={false}
          />
        </div>
      </div>
    </div>
  );
};
