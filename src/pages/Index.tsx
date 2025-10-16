import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileTabs } from "@/components/ProfileTabs";
import { ProfileLoader } from "@/components/ProfileLoader";
import Particles from "@/components/ui/particles";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ProfileLoader />;
  }

  const currentTheme = resolvedTheme || theme;
  const particleColors = currentTheme === 'dark'
    ? ['#ffffff', '#e0e0e0']
    : ['#000000', '#333333'];
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={particleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      <div className="container max-w-6xl mx-auto py-8 px-4 animate-fade-in relative z-10">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Index;
