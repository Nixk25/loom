import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
const BenefitThirdText = () => {
  const { setCursorBig } = useCursor();
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: [1, 1, 0, 0, 1],
          x: ["100%", "-40%", "-40%", "100%", "100%"],
        }}
        transition={{
          duration: 8,
          times: [0, 0.7, 0.8, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        className="uppercase mainHeadline text-nowrap "
      >
        B<span className="font">ui</span>ld Y<span className="font">our</span> P
        <span className="font">ro</span>
        file
      </motion.h1>
      <div
        key="description"
        className="absolute bottom-2 right-0 text-center w-full flex justify-center items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="uppercase text-3xl"
        >
          Set up your profile and let the <br /> world see your unique designs
          and <br /> creative journey.
        </motion.p>
      </div>
    </>
  );
};

export default BenefitThirdText;
