"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";

const JoinUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorHidden } = useCursor();
  return (
    <section
      className="w-full min-h-screen flex relative justify-center items-center overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorHidden(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorHidden(false);
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <h2
          className={`${
            isHovered ? "text-white" : "text-black"
          } mainHeadline  text-center font uppercase relative z-10`}
        >
          Join us
        </h2>
      </div>

      <motion.div
        animate={{
          scale: isHovered ? 100 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute  bg-neutral-900 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-0 "
      />
    </section>
  );
};

export default JoinUs;
