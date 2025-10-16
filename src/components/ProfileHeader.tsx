import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactButton } from "@/components/ContactButton";
import { CONTACT_INFO } from "@/config/contact";
import coverImage from "@/assets/cover.png";
import profileImage from "@/assets/profile.jpg";

export const ProfileHeader = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] mb-6">
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="px-4 sm:px-6 pb-6">
        <div className="flex md:hidden flex-col items-center gap-6 -mt-16 pt-2">
          <Avatar className="w-32 h-32 border-4 border-card shadow-lg">
            <AvatarImage src={profileImage} alt="Rafael Race" className="object-cover" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>

          <div className="text-center w-full px-2">
            <h1 className="text-2xl font-bold text-black dark:text-white mb-2">Rafael Race</h1>
            <p className="text-base text-muted-foreground mb-4">
              Junior Full Stack Developer
            </p>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <button
                  onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`, '_blank')}
                  className="hover:text-foreground transition-colors"
                >
                  {CONTACT_INFO.email}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full justify-center">
            <ThemeToggle />
            <ContactButton
              email={CONTACT_INFO.email}
              subject={CONTACT_INFO.subject}
              className="bg-primary hover:bg-primary/90 transition-all"
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-6 items-end -mt-16">
          <Avatar className="w-32 h-32 border-4 border-card shadow-lg flex-shrink-0">
            <AvatarImage src={profileImage} alt="Rafael Race" className="object-cover" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-1">Rafael Race</h1>
            <p className="text-lg text-muted-foreground">
              Junior Full Stack Developer
            </p>

            <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <button
                  onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`, '_blank')}
                  className="hover:text-foreground transition-colors"
                >
                  {CONTACT_INFO.email}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <ContactButton
              email={CONTACT_INFO.email}
              subject={CONTACT_INFO.subject}
              className="bg-primary hover:bg-primary/90 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
