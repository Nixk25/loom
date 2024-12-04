"use client";
import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
const BenefitFirstText = () => {
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
          duration: 12,
          times: [0, 0.7, 0.8, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        className="uppercase mainHeadline text-nowrap "
      >
        P<span className="font">ers</span>onaliz
        <span className="font">ed</span> <span className="font">Ins</span>
        piration <span className="font">at</span> Your Fing
        <span className="font">ert</span>ips
      </motion.h1>
      <div key="description" className="absolute bottom-2 left-2">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="uppercase text-3xl"
        >
          Receive a curated feed of designs <br /> that match your unique taste
          and <br />
          interests.
        </motion.p>
      </div>
    </>
  );
};

export default BenefitFirstText;
