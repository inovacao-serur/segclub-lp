import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnnouncementBar from "./AnnouncementBar";
import Navbar, { type LogoVariant } from "./Navbar";
import "./layout.css"

interface HeaderProps {
  logo?: LogoVariant;
}

export default function Header({ logo = "logo" }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!headerRef.current) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide header
        gsap.to(headerRef.current, {
          y: -120,
          delay: 0.10,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        // Scrolling up - show header
        gsap.to(headerRef.current, {
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
        <AnnouncementBar/>
        <Navbar logo={logo} />
    </div>
  )
}
