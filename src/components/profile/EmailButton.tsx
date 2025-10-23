import { Mail } from "lucide-react";

interface EmailButtonProps {
  email: string;
}

export const EmailButton = ({ email }: EmailButtonProps) => {
  const handleClick = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="hover:text-foreground transition-colors flex items-center gap-2"
    >
      <Mail className="w-4 h-4 flex-shrink-0" />
      <span>{email}</span>
    </button>
  );
};

