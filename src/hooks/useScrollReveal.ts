import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.course-card')
      .forEach(card => observer.observe(card));
    
    document.querySelectorAll('.feature-block')
      .forEach(block => observer.observe(block));

    return () => observer.disconnect();
  }, []);
}
