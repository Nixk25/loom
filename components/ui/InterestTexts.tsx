"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const InterestTexts = () => {
  const target1 = useRef<HTMLDivElement>(null);
  const target2 = useRef<HTMLDivElement>(null);
  const target3 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: target1,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: target2,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: target3,
    offset: ["start end", "start start"],
  });
  const opacity1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress2, [0, 0.5, 1], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress3, [0, 0.5, 1], [0, 1, 0]);
  const scale1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0.5, 1.5, 1]);
  const scale2 = useTransform(scrollYProgress2, [0, 0.5, 1], [0.5, 1.5, 1]);
  const scale3 = useTransform(scrollYProgress3, [0, 0.5, 1], [0.5, 1.5, 1]);
  return (
    <div className="flex flex-col gap-10 mt-[50vh] items-center">
      <motion.h2
        ref={target1}
        className="h-screen mainHeadline uppercase max-w-[100vw]"
        style={{ opacity: opacity1, scale: scale1 }}
      >
        De<span className="font">sig</span>n
      </motion.h2>
      <motion.h2
        ref={target2}
        className="h-screen mainHeadline uppercase max-w-[100vw]"
        style={{ opacity: opacity2, scale: scale2 }}
      >
        Con<span className="font">nec</span>t
      </motion.h2>
      <motion.h2
        ref={target3}
        className="h-screen mainHeadline uppercase max-w-[100vw]"
        style={{ opacity: opacity3, scale: scale3 }}
      >
        <span className="font">Ins</span>p<span className="font">i</span>re
      </motion.h2>
    </div>
  );
};

export default InterestTexts;
