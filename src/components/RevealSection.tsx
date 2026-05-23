import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealSectionProps = {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
};

function RevealSection({ children, direction = 'up', className }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: any = {
      up: { y: 80, opacity: 0 },
      down: { y: -80, opacity: 0 },
      left: { x: -80, opacity: 0 },
      right: { x: 80, opacity: 0 },
    }[direction];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default RevealSection;
