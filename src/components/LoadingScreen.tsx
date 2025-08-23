import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-orbitron font-bold text-4xl text-white mb-4">
            HELLO WORLD
          </h1>
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-white/60 to-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 mt-4">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;