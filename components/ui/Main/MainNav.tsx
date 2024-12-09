"use client";
import React, { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
import LoomLogo from "@/components/ui/LoomLogo";
const MainNav = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { setCursorBig } = useCursor();
  const IsDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const prev = scrollY.getPrevious();
    if (latest > prev! && latest > (IsDesktop ? 150 : 20)) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{
        type: "spring",
        duration: 0.3,
        stiffness: 260,
        damping: 20,
      }}
      className="w-full flex fixed top-0 left-0 backdrop-blur-md z-[99999] items-center justify-between px-10"
    >
      <a
        href="#"
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
      >
        <div
          className={` ${
            IsDesktop ? "size-[80px]" : "size-[100px]"
          } cursor-pointer ${isDrawerOpen ? "text-white" : "text-black"}`}
        >
          <LoomLogo />
        </div>
      </a>

      <div
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        className="rounded-full  w-28 h-8 border relative flex items-center justify-center px-5 z-[999] cursor-none"
      >
        <span
          className={`absolute w-max px-5 cursor-none ${
            isDrawerOpen ? "text-white" : "text-black"
          }`}
        >
          Your space
        </span>
      </div>
    </motion.nav>
  );
};

export default MainNav;
