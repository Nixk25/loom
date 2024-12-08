import React from "react";
import { motion } from "framer-motion";

type RegisterBlocksProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterBlocks = ({ isLogin, setIsLogin }: RegisterBlocksProps) => {
  return (
    <>
      <motion.div
        key={`input-block-1-${isLogin}`}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{
          opacity: [0, 1, 1, 1, 1],
          y: ["-100%", "0%", "0%", "-100%", "-100%"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="w-full h-[50vh] bg-neutral-800 absolute top-0 left-0 z-[99999]"
      />

      <motion.div
        key={`input-block-2-${isLogin}`}
        initial={{ opacity: 0, y: "100%" }}
        animate={{
          opacity: [0, 1, 1, 1, 1],
          y: ["100%", "0%", "0%", "100%", "100%"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="w-full h-[50vh] bg-neutral-800 absolute bottom-0 left-0 z-[99999]"
      />
    </>
  );
};

export default RegisterBlocks;
