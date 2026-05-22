
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import App from "./app/App.tsx";
import "./styles/index.css";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <SmoothScroll>
    <App />
  </SmoothScroll>
);
  