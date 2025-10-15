import { useState, useEffect } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileTabs } from "@/components/ProfileTabs";
import { ProfileLoader } from "@/components/ProfileLoader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ProfileLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto py-8 px-4 animate-fade-in">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Index;
