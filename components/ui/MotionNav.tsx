import React from "react";
import LoomLogo from "./LoomLogo";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";

type MotionNavProps = {
  isHidden: boolean;
  isMenuOpen: boolean;
  IsDesktop: boolean;
  toggleMenu: () => void;
};
const MotionNav = ({
  isHidden,
  isMenuOpen,
  IsDesktop,
  toggleMenu,
}: MotionNavProps) => {
  const { setCursorBig } = useCursor();
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
        <motion.div
          animate={{ color: isMenuOpen ? "white" : "black" }}
          className={` ${
            IsDesktop ? "size-[80px]" : "size-[100px]"
          } cursor-pointer`}
        >
          <LoomLogo />
        </motion.div>
      </a>

      <div
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        onClick={toggleMenu}
        className={`rounded-full  w-20 h-8 border   relative flex items-center justify-center ${
          isMenuOpen ? "border-white" : "border-black"
        }`}
      >
        <motion.span
          className="absolute "
          animate={{
            opacity: isMenuOpen ? 0 : 1,
            y: isMenuOpen ? "100%" : "0%",
            color: isMenuOpen ? "white" : "black",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Menu
        </motion.span>
        <motion.span
          className="absolute "
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? "0%" : "100%",
            color: isMenuOpen ? "white" : "black",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Close
        </motion.span>
      </div>
    </motion.nav>
  );
};

export default MotionNav;
