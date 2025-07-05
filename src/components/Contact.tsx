import { useState, useEffect, useMemo } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Contact = () => {
  const floatingElements = useMemo(
    () => [
      { icon: Mail, size: 'lg', color: 'neon-blue' },
      { icon: Send, size: 'md', color: 'neon-green' },
      { icon: MessageCircle, size: 'sm', color: 'neon-purple' },
      { icon: Mail, size: 'sm', color: 'neon-blue' },
      { icon: Send, size: 'lg', color: 'neon-green' },
      { icon: MessageCircle, size: 'md', color: 'neon-purple' },
    ],
    []
  );

  const [floatingIcons, setFloatingIcons] = useState<{
    Icon: LucideIcon;
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
      opacity: number;
      size: string;
      color: string;
    };
  }[]>([]);

  useEffect(() => {
    let mounted = true;
    const icons = floatingElements.map(({ icon, size, color }) => ({
      Icon: icon,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.1,
        size: size === 'sm' ? '2rem' : size === 'md' ? '3rem' : '4rem',
        color,
      },
    }));

    if (mounted) {
      setFloatingIcons(icons);
    }

    return () => {
      mounted = false;
    };
  }, [floatingElements]);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute animate-float-slow"
            style={{
              ...item.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <item.Icon
              style={{
                width: item.style.size,
                height: item.style.size,
              }}
              className={`text-${item.style.color}`}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            If you'd like to collaborate on projects or have any inquiries, feel
            free to reach out to me via email:
          </p>
          <div className="mt-4">
            <a
              href="mailto:rhaprace@gmail.com"
              className="text-neon-blue hover:text-neon-green transition-colors duration-300 text-lg font-medium"
            >
              rhaprace@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Contact;