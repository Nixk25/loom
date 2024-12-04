import React from "react";
import { motion } from "framer-motion";

const RegisterBlocks = () => {
  return (
    <>
      <motion.div
        key="input-block-1"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: "-100%" }}
        transition={{
          duration: 3,
          opacity: { duration: 1 },
          y: { duration: 1, delay: 3 },
        }}
        className="w-full h-[50vh] bg-neutral-800 absolute top-0 left-0 z-50"
      />

      <motion.div
        key="input-block-2"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: "100%" }}
        transition={{
          duration: 3,
          opacity: { duration: 1 },
          y: { duration: 1, delay: 3 },
        }}
        className="w-full h-[50vh] bg-neutral-800 absolute bottom-0 left-0"
      />
    </>
  );
};

export default RegisterBlocks;
