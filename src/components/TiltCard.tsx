import React, { useRef, useEffect } from 'react';

type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

function TiltCard({ children, className, style, ...rest }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) return;

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = (e as MouseEvent).clientX - centerX;
      const mouseY = (e as MouseEvent).clientY - centerY;
      const rotateX = -(mouseY / rect.height) * 12;
      const rotateY = (mouseX / rect.width) * 12;

      (card.style as any).transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;

      const glareX = ((e as MouseEvent).clientX - rect.left) / rect.width * 100;
      const glareY = ((e as MouseEvent).clientY - rect.top) / rect.height * 100;

      (card.style as any).background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(196,148,58,0.2) 0%, rgba(15,10,0,0.97) 65%)`;

      (card.style as any).borderColor = 'rgba(196,148,58,0.8)';
      (card.style as any).boxShadow = '0 20px 60px rgba(196,148,58,0.15)';
    };

    const handleMouseLeave = () => {
      if (!card) return;
      (card.style as any).transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      (card.style as any).background = 'rgba(15,10,0,0.95)';
      (card.style as any).borderColor = 'rgba(196,148,58,0.3)';
      (card.style as any).boxShadow = 'none';
      (card.style as any).transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    };

    const handleMouseEnter = () => {
      if (!card) return;
      (card.style as any).transition = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderRadius: '16px',
        border: '1px solid rgba(196,148,58,0.3)',
        padding: '24px',
        background: 'rgba(15,10,0,0.95)',
        position: 'relative',
        overflow: 'hidden',
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default TiltCard;
