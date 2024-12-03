"use client";
import { useCursor } from "@/app/CursorContext";
import React from "react";
import HeroMainText from "./ui/HeroMainText";

const Hero = () => {
  const { setCursorHidden } = useCursor();

  return (
    <section
      onMouseEnter={() => setCursorHidden(false)}
      onMouseLeave={() => setCursorHidden(false)}
      className="flex justify-center items-center min-h-screen mt-10 overflow-x-hidden"
    >
      <div className="container flex justify-center items-center">
        <HeroMainText />
      </div>
    </section>
  );
};

export default Hero;
