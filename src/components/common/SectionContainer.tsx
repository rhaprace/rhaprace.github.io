import type { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  backgroundVariant?: 'default' | 'gradient' | 'minimal';
}

const SectionContainer = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  backgroundVariant = 'default'
}: SectionContainerProps) => {
  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case 'gradient':
        return 'bg-gradient-to-br from-background via-background/95 to-background/90';
      case 'minimal':
        return 'bg-background';
      default:
        return 'bg-background';
    }
  };

  return (
    <section id={id} className={`py-20 relative overflow-hidden ${getBackgroundClasses()} ${className}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white">
            {title}
          </h2>
          {subtitle && (
            <>
              <div className="h-1 w-32 bg-gradient-to-r from-white/0 via-white/50 to-white/0 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            </>
          )}
        </div>
        
        {/* Main Content */}
        {children}
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default SectionContainer;