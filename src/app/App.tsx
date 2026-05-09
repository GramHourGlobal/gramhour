import MobileApp from "./MobileApp";
import DesktopApp from "./DesktopApp";

export default function App() {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <>
      {isDesktop ? <DesktopApp /> : <MobileApp />}
    </>
  );
}
