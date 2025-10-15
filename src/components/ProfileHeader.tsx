import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import coverImage from "@/assets/cover.png";
import profileImage from "@/assets/profile.jpg";

export const ProfileHeader = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] mb-6">
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-auto object-cover max-h-64 sm:max-h-80 md:max-h-96"
        />
      </div>
      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-8 md:-mt-16">
          <Avatar className="w-32 h-32 border-4 border-card shadow-lg flex-shrink-0">
            <AvatarImage src={profileImage} alt="Rafael Race" className="object-cover" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
          <div className="flex-1 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-1">Rafael Race</h1>
            <p className="text-lg text-muted-foreground">
              Junior Full Stack Developer
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Olongapo City, PH</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:rhaprace@gmail.com" className="hover:text-primary transition-colors">
                  rhaprace@gmail.com
                </a>
              </div>
            </div>
          </div>
          <Button className="md:mb-2 bg-primary hover:bg-primary/90 transition-all">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
