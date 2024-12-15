"use client";
import React, { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
import Logo from "../Logo";
import MainNavButtons from "./MainNavButtons";
import { Photo } from "../MainClient";
const MainNav = ({
  isDrawerOpen,
  photos,
  setPhotos,
}: {
  isDrawerOpen: boolean;
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
}) => {
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
      <Logo
        IsDesktop={IsDesktop}
        isDrawerOpen={isDrawerOpen}
        setCursorBig={setCursorBig}
      />

      <MainNavButtons
        photos={photos}
        setPhotos={setPhotos}
        setCursorBig={setCursorBig}
        isDrawerOpen={isDrawerOpen}
      />
    </motion.nav>
  );
};

export default MainNav;
