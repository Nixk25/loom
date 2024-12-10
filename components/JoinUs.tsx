"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
import { useRouter } from "next/navigation";
const JoinUs = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const { setDifferentCursor } = useCursor();

  const handleClick = () => {
    router.push("/benefitfirst");
  };

  return (
    <section
      onClick={handleClick}
      id="contact"
      className="w-full min-h-screen flex relative justify-center items-center overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
        setDifferentCursor(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setDifferentCursor(false);
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <h2
          className={`${
            isHovered ? "text-white" : "text-black"
          } mainHeadline text-center font uppercase relative z-10`}
        >
          Join us
        </h2>
      </div>

      <motion.div
        animate={{
          scale: isHovered ? 10000 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute bg-neutral-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 size-1"
      />
    </section>
  );
};

export default JoinUs;
