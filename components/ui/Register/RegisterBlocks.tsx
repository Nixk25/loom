import React, { useEffect } from "react";
import { motion } from "framer-motion";

type RegisterBlocksProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterBlocks = ({ isLogin, setIsLogin }: RegisterBlocksProps) => {
  return (
    <>
      {/* První blok, který se pohybuje zeshora dolů a zpět nahoru */}
      <motion.div
        key={`input-block-1-${isLogin}`}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{
          opacity: [0, 1, 1, 1, 1], // První fade in a pak fade out efekt
          y: ["-100%", "0%", "0%", "-100%", "-100%"], // Pohyb od shora, dolů, zpět nahoru
        }}
        transition={{
          duration: 5, // Délka animace
          times: [0, 0.2, 0.5, 0.8, 1], // Časování
        }}
        className="w-full h-[50vh] bg-neutral-800 absolute top-0 left-0 z-[99999]"
      />

      {/* Druhý blok, který se pohybuje odspodu nahoru a zpět */}
      <motion.div
        key={`input-block-2-${isLogin}`}
        initial={{ opacity: 0, y: "100%" }}
        animate={{
          opacity: [0, 1, 1, 1, 1], // První fade in a pak fade out efekt
          y: ["100%", "0%", "0%", "100%", "100%"], // Pohyb odspodu nahoru, zpět dolů
        }}
        transition={{
          duration: 5, // Délka animace
          times: [0, 0.2, 0.5, 0.8, 1], // Časování
        }}
        className="w-full h-[50vh] bg-neutral-800 absolute bottom-0 left-0 z-[99999]"
      />
    </>
  );
};

export default RegisterBlocks;
