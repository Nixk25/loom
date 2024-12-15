import React from "react";
import { motion } from "framer-motion";

type MainBlocksProps = {
  isTransition: boolean;
};

const MainBlocks = ({ isTransition }: MainBlocksProps) => {
  return (
    <>
      <motion.div
        key={`input-block-1-${isTransition}`}
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: ["-50%", "-50%", "-100%", "-100%"],
          opacity: [1, 1, 1, 0],
          display: ["block", "block", "block", "none"],
        }}
        transition={{
          duration: 3,
          times: [0, 0.5, 0.8, 1],
          ease: "easeIn",
        }}
        className="w-full h-[200vh] bg-neutral-800 absolute top-0 left-0 z-[999999]"
      />

      <motion.div
        key={`input-block-2-${isTransition}`}
        initial={{ y: "0%", opacity: 1 }}
        animate={{
          y: ["50%", "50%", "100%", "100%"],
          opacity: [1, 1, 1, 0],
          display: ["block", "block", "block", "none"],
        }}
        transition={{
          duration: 3,
          times: [0, 0.5, 0.8, 1],
          ease: "easeIn",
        }}
        className="w-full h-[200vh] bg-neutral-800 absolute bottom-0 left-0 z-[999999]"
      />
    </>
  );
};

export default MainBlocks;
