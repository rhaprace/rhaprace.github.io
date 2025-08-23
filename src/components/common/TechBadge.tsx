interface TechBadgeProps {
  tech: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

const TechBadge = ({ tech, variant = 'primary', size = 'sm' }: TechBadgeProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20';
      case 'secondary':
        return 'bg-white/10 text-white border-white/20 hover:bg-white/20';
      default:
        return 'bg-gray-500/10 text-gray-300 border-gray-500/20 hover:bg-gray-500/20';
    }
  };

  const getSizeClasses = () => {
    return size === 'sm' ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm';
  };

  return (
    <span className={`
      rounded-md border transition-colors duration-300 
      ${getVariantClasses()} ${getSizeClasses()}
    `}>
      {tech}
    </span>
  );
};

export default TechBadge;