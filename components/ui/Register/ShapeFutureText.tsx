"use client";
import React from "react";
import { motion } from "framer-motion";

const ShapeFutureText = () => {
  return (
    <motion.span
      key="shape-future"
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{ duration: 1 }}
      className="registerHeadline uppercase text-center leading-[50px] xl:leading-[100px]"
    >
      S<span className="font">hap</span>e the Fut
      <span className="font">ure</span> of <br /> De
      <span className="font">sign</span>
    </motion.span>
  );
};

export default ShapeFutureText;
