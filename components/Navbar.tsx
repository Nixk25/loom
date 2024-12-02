"use client";
import React, { useState, useEffect } from "react";
import ButtonEnhanced from "./ui/ButtonEnchanced";
import logo from "../app/assets/icons/Loom.svg";
import Image from "next/image";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isClient, setIsClient] = useState(false); // Stav pro kontrolu, jestli je komponenta na klientovi
  const IsDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsClient(true); // Nastaví isClient na true po prvním renderování
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const prev = scrollY.getPrevious();
    //@ts-ignore
    if (latest > prev && latest > (IsDesktop ? 150 : 20)) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Pokud komponenta běží na serveru, ještě nevíme, zda je to klient
  if (!isClient) {
    return null; // Počkáme na klientské renderování
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
      className="w-full flex fixed top-0 left-0 backdrop-blur-md z-[99999] items-center justify-between p-4"
    >
      <div className="flex items-center gap-10">
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={IsDesktop ? 100 : 50}
        />
      </div>
      <div className="items-center gap-5 hidden sm:flex">
        <ButtonEnhanced size="small" prevTitle="Join us" />
        <ButtonEnhanced size="small" prevTitle="Start your journey" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
