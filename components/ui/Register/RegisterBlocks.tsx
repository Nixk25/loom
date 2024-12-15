import React from "react";
import { motion } from "framer-motion";

type RegisterBlocksProps = {
  isBlocksAnimating: boolean;
};

const RegisterBlocks = ({ isBlocksAnimating }: RegisterBlocksProps) => {
  return (
    <>
      <motion.div
        key={`input-block-1-${isBlocksAnimating}`}
        initial={{ opacity: 0, y: "-50%" }}
        animate={{
          opacity: [0, 1, 1, 1, 1],
          y: ["-50%", "0%", "0%", "-100%", "-100%"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="w-full h-[200vh] bg-neutral-800 absolute top-0 left-0 z-[99999]"
      />

      <motion.div
        key={`input-block-2-${isBlocksAnimating}`}
        initial={{ opacity: 0, y: "50%" }}
        animate={{
          opacity: [0, 1, 1, 1, 1],
          y: ["50%", "0%", "0%", "100%", "100%"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="w-full h-[200vh] bg-neutral-800 absolute bottom-0 left-0 z-[99999]"
      />
    </>
  );
};

export default RegisterBlocks;
