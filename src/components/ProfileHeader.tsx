import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";
import coverImage from "@/assets/cover-image.jpg";

export const ProfileHeader = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] mb-6">
      {/* Cover Image */}
      <div className="h-80 relative overflow-hidden">
        <img 
          src={coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Profile Info */}
      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16">
          {/* Avatar */}
          <Avatar className="w-32 h-32 border-4 border-card shadow-lg">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          {/* Name and Info */}
          <div className="flex-1 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Full Stack Developer & UI/UX Designer
            </p>
            
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon className="w-4 h-4" />
                <a href="https://johndoe.com" className="hover:text-primary transition-colors">
                  johndoe.com
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button className="md:mb-2 bg-primary hover:bg-primary/90 transition-all">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
