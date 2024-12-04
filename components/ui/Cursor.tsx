"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";

const Cursor = () => {
  const { isCursorHidden, differentCursor, isCursorBig } = useCursor();
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`absolute hidden sm:block top-0 left-0 
      bg-white rounded-full origin-center ${
        !differentCursor
          ? "size-6  mix-blend-difference  pointer-events-none  z-[999999]"
          : "w-max p-5 text-neutral-900 bg-white rounded-full z-[999] pointer-events-none"
      }`}
      animate={{
        opacity: isCursorHidden ? 0 : 1,
        x: cursorPosition.x - 12,
        y: cursorPosition.y - 12,
        scale: isCursorBig ? 5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      {differentCursor && <motion.span>Click to join</motion.span>}
    </motion.div>
  );
};

export default Cursor;
