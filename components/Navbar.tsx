"use client";
import React, { useState, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence } from "framer-motion";
import MenuContent from "./ui/MenuContent";
import MotionNav from "./ui/MotionNav";
const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const IsDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.setProperty("height", "100vh", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    }

    return () => {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    };
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const prev = scrollY.getPrevious();
    if (latest > prev! && latest > (IsDesktop ? 150 : 20)) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  if (!isClient) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MotionNav
        IsDesktop={IsDesktop}
        isMenuOpen={isMenuOpen}
        isHidden={isHidden}
        toggleMenu={toggleMenu}
      />

      <AnimatePresence mode="wait">
        {isMenuOpen && <MenuContent toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
