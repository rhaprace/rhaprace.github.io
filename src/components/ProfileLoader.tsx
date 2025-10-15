import { useEffect, useState } from "react";

export const ProfileLoader = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Outer rotating square */}
        <div
          className={`absolute inset-0 border-2 border-foreground transition-transform duration-500 ${
            stage === 0 ? "rotate-0" : stage === 1 ? "rotate-45" : "rotate-90"
          }`}
        />
        
        {/* Middle circle */}
        <div
          className={`absolute inset-4 rounded-full border-2 border-foreground transition-all duration-500 ${
            stage === 1 ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Inner pulsing dot */}
        <div
          className={`absolute inset-12 bg-foreground rounded-full transition-all duration-500 ${
            stage === 2 ? "scale-150 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        
        {/* Corner dots */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-foreground rounded-full transition-all duration-500 ${
              i === 0 ? "-top-1 -left-1" : 
              i === 1 ? "-top-1 -right-1" : 
              i === 2 ? "-bottom-1 -left-1" : 
              "-bottom-1 -right-1"
            } ${stage === i % 3 ? "scale-150" : "scale-100"}`}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <div className="absolute mt-48 flex gap-1">
        {["L", "o", "a", "d", "i", "n", "g"].map((letter, i) => (
          <span
            key={i}
            className="text-foreground font-medium animate-fade-in"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
              animationIterationCount: "infinite",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};
