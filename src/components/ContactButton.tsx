import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, ExternalLink, Copy } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { emailService } from "@/lib/email-service";

interface ContactButtonProps {
  email: string;
  subject?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const ContactButton = ({
  email,
  subject = "Portfolio Contact",
  className,
  variant = "default",
  size = "default"
}: ContactButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGmail = () => {
    emailService.openGmail({ email, subject });
    setIsOpen(false);
  };

  const handleOutlook = () => {
    emailService.openOutlook({ email, subject });
    setIsOpen(false);
  };

  const handleDefaultClient = () => {
    emailService.openDefault({ email, subject });
    setIsOpen(false);
  };

  const handleCopyEmail = async () => {
    const result = await emailService.copyToClipboard(email);
    if (result.success) {
      toast.success("Email copied to clipboard!");
    } else {
      toast.error("Failed to copy email");
    }
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Mail className="w-4 h-4 mr-2" />
          Contact Me
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuItem onClick={handleGmail} className="cursor-pointer">
          <ExternalLink className="mr-2 h-4 w-4" />
          <span>Open in Gmail</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleOutlook} className="cursor-pointer">
          <ExternalLink className="mr-2 h-4 w-4" />
          <span>Open in Outlook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDefaultClient} className="cursor-pointer">
          <Mail className="mr-2 h-4 w-4" />
          <span>Default Email App</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyEmail} className="cursor-pointer">
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy Email</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
