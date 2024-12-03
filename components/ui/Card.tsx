"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
type CardProps = {
  data: {
    id: number;
    artist: string;
    image: StaticImageData;
    title: string;
  };
};

const Card = ({ data }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <div
      ref={container}
      className="h-[100vh]  sticky top-0 translate-y-[10%] max-w-[70%]"
    >
      <motion.div
        style={{
          top: `calc(-5vh + ${data.id * 25}px)`,
          scale,
        }}
        className="relative  "
      >
        <Image src={data.image} alt={data.title} className="rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 blur-lg opacity-50" />
        <div className="absolute bottom-5 left-5 text-white">
          <h2 className="font-bold text-2xl sm:text-4xl">{data.title}</h2>
          <p className="text-sm font-normal">{data.artist}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
