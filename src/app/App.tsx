import { useEffect, useState } from "react";
import MobileApp from "./MobileApp";
import DesktopApp from "./DesktopApp";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ScrollProgress />
      {isDesktop ? <DesktopApp /> : <MobileApp />}
    </>
  );
}
