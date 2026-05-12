import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const progress = 
        (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => 
      window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '3px',
      background: 'linear-gradient(90deg, #F0C040, #C4943A)',
      zIndex: 9999,
      transition: 'width 0.1s ease'
    }} />
  );
}

export default ScrollProgress;
