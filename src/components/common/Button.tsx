import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self';
  rel?: string;
}

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = "",
  disabled = false,
  type = 'button',
  target,
  rel
}: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25';
      case 'secondary':
        return 'bg-card/50 backdrop-blur-sm border border-white/10 text-white hover:bg-card/70 hover:border-white/30';
      case 'outline':
        return 'border border-white/30 text-white/90 hover:text-white hover:border-white/60 hover:bg-white/5';
      case 'ghost':
        return 'text-white/70 hover:text-white hover:bg-white/10';
      default:
        return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center space-x-2 font-semibold rounded-lg 
    transition-all duration-300 transform will-change-transform
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${getVariantClasses()} ${getSizeClasses()} ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={rel}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;