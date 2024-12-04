import React from "react";
import { motion } from "framer-motion";
const RevolutionText = () => {
  return (
    <>
      <motion.span
        key="top-revolution"
        initial={{ opacity: 0, y: "50%", scaleX: -1 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={{ duration: 1 }}
        className="absolute top-0 uppercase text-center text-nowrap mainHeadline blur-[6px] scale-x-[-1]"
      >
        Revolution
      </motion.span>
      <motion.span
        key="bottom-revolution"
        initial={{ opacity: 0, y: "-50%", rotate: 180 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 uppercase text-nowrap mainHeadline blur-[6px] rotate-180"
      >
        Revolution
      </motion.span>
    </>
  );
};

export default RevolutionText;
