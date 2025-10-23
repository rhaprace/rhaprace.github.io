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

type EmailClientType = "gmail" | "outlook" | "default" | "copy";

const EMAIL_CLIENTS = [
  { type: "gmail" as const, icon: ExternalLink, label: "Open in Gmail" },
  { type: "outlook" as const, icon: ExternalLink, label: "Open in Outlook" },
  { type: "default" as const, icon: Mail, label: "Default Email App" },
  { type: "copy" as const, icon: Copy, label: "Copy Email" },
];

export const ContactButton = ({
  email,
  subject = "Portfolio Contact",
  className,
  variant = "default",
  size = "default"
}: ContactButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailClient = async (type: EmailClientType) => {
    switch (type) {
      case "gmail":
        emailService.openGmail({ email, subject });
        break;
      case "outlook":
        emailService.openOutlook({ email, subject });
        break;
      case "default":
        emailService.openDefault({ email, subject });
        break;
      case "copy": {
        const result = await emailService.copyToClipboard(email);
        if (result.success) {
          toast.success("Email copied to clipboard!");
        } else {
          toast.error("Failed to copy email");
        }
        break;
      }
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
        {EMAIL_CLIENTS.map(({ type, icon: Icon, label }) => (
          <DropdownMenuItem
            key={type}
            onClick={() => handleEmailClient(type)}
            className="cursor-pointer"
          >
            <Icon className="mr-2 h-4 w-4" />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
