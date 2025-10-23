import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileTabs } from "@/components/ProfileTabs";
import { ProfileLoader } from "@/components/ProfileLoader";
import Particles from "@/components/ui/particles";
import { LOADING_DURATION } from "@/constants/timing";
import { PARTICLE_CONFIG, PARTICLE_COLORS } from "@/config/particles";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, LOADING_DURATION);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ProfileLoader />;
  }

  const currentTheme = resolvedTheme || theme;
  const particleColors =
    currentTheme === "dark" ? PARTICLE_COLORS.DARK : PARTICLE_COLORS.LIGHT;

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={particleColors}
          particleCount={PARTICLE_CONFIG.COUNT}
          particleSpread={PARTICLE_CONFIG.SPREAD}
          speed={PARTICLE_CONFIG.SPEED}
          particleBaseSize={PARTICLE_CONFIG.BASE_SIZE}
          moveParticlesOnHover={PARTICLE_CONFIG.MOVE_ON_HOVER}
          alphaParticles={PARTICLE_CONFIG.ALPHA_PARTICLES}
          disableRotation={PARTICLE_CONFIG.DISABLE_ROTATION}
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
