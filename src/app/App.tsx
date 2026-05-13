import { useEffect, useState } from "react";
import MobileApp from "./MobileApp";
import DesktopApp from "./DesktopApp";
import ScrollProgress from "./components/ScrollProgress";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  // Enable scroll reveal animations
  useScrollReveal();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add subtle scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const hero = document.getElementById('hero-logo');
      if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      const heroText = document.getElementById('hero-text');
      if (heroText) {
        heroText.style.transform = `translateY(${scrollY * 0.08}px)`;
      }

      const heroBg = document.getElementById('hero-bg');
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      {isDesktop ? <DesktopApp /> : <MobileApp />}
    </>
  );
}
