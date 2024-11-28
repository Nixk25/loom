"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";

const Cursor = () => {
  const { isCursorHidden } = useCursor();
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
      className="absolute top-0 left-0 size-6 bg-white mix-blend-difference rounded-full pointer-events-none  z-[999]"
      animate={{
        opacity: isCursorHidden ? 0 : 1,
        x: cursorPosition.x - 12,
        y: cursorPosition.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

export default Cursor;
