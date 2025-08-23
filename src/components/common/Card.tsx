import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glass' | 'solid';
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className = "", 
  hover = true, 
  variant = 'glass',
  padding = 'md',
  onClick 
}: CardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'bg-card/50 backdrop-blur-sm border border-white/20';
      case 'solid':
        return 'bg-card border border-border';
      default:
        return 'bg-card/30 backdrop-blur-sm border border-border/30';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  const hoverClasses = hover 
    ? 'hover:border-white/40 hover:bg-card/70 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] transition-all duration-300'
    : '';

  return (
    <div 
      className={`rounded-lg ${getVariantClasses()} ${getPaddingClasses()} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;