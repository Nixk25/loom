"use client";
import React from "react";
import { CARDS } from "@/app/constants";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalSectionCard from "./HorizontalSectionCard";
import { useCursor } from "@/app/CursorContext";

const HorizontalScrollCarousel = () => {
  const { setCursorHidden } = useCursor();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      onMouseEnter={() => setCursorHidden(true)}
      onMouseLeave={() => setCursorHidden(false)}
      className="relative h-[300vh] "
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {CARDS.map((card) => {
            return <HorizontalSectionCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
