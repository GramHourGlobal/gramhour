import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export function RevealOnScroll({ 
  children, 
  delay = 0,
  direction = 'up'
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-80px' 
  });

  const directions = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 }
  } as const;

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: directions[direction].y,
        x: directions[direction].x,
        filter: 'blur(8px)'
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        filter: 'blur(0px)'
      } : {}}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children 
}: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-60px'
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children 
}: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 40,
          filter: 'blur(6px)'
        },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
