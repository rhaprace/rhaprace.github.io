import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileTabs } from "@/components/ProfileTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Index;
