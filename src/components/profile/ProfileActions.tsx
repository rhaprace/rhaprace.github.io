import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactButton } from "@/components/ContactButton";

interface ProfileActionsProps {
  email: string;
  subject: string;
  isMobile?: boolean;
}

export const ProfileActions = ({
  email,
  subject,
  isMobile = false,
}: ProfileActionsProps) => {
  const containerClass = isMobile
    ? "flex gap-3 items-center w-full justify-center"
    : "flex gap-3 items-center";

  return (
    <div className={containerClass}>
      <ThemeToggle />
      <ContactButton
        email={email}
        subject={subject}
        className="bg-primary hover:bg-primary/90 transition-all"
      />
    </div>
  );
};

