import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface SocialLinksProps {
  variant?: 'default' | 'large' | 'minimal';
  className?: string;
}

const SocialLinks = ({ variant = 'default', className = "" }: SocialLinksProps) => {
  const links: SocialLink[] = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rafael-race-54033719b",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/rhaprace",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:rhaprace@gmail.com",
      label: "Email"
    }
  ];

  const getVariantClasses = () => {
    switch (variant) {
      case 'large':
        return {
          container: 'space-x-8',
          link: 'w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-neon-blue/50 hover:text-neon-blue hover:bg-slate-700/50',
          icon: 'h-6 w-6'
        };
      case 'minimal':
        return {
          container: 'space-x-4',
          link: 'w-10 h-10 bg-card/50 border border-border/50 rounded hover:border-neon-blue hover:text-neon-blue',
          icon: 'h-5 w-5'
        };
      default:
        return {
          container: 'space-x-6',
          link: 'w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-white/40 hover:text-white hover:bg-card/70',
          icon: 'h-5 w-5'
        };
    }
  };

  const classes = getVariantClasses();

  return (
    <div className={`flex justify-center ${classes.container} ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center justify-center transition-all duration-300 
            hover:scale-110 hover:shadow-lg hover:shadow-white/10
            ${classes.link}
          `}
          title={link.label}
          aria-label={link.label}
        >
          <link.icon className={`${classes.icon} group-hover:scale-110 transition-transform duration-300`} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;