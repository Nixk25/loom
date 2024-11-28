"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import photo1 from "../public/ParallaxScalePhotos/ParallaxScale2.jpeg";
import photo2 from "../public/ParallaxScalePhotos/ParallaxScale5.png";
import photo3 from "../public/ParallaxScalePhotos/ParallaxScale3.png";
import photo4 from "../public/ParallaxScalePhotos/ParallaxScale4.png";
import photo5 from "../public/ParallaxScalePhotos/ParallaxScale1.png";
import { useCursor } from "@/app/CursorContext";
const ParallaxScale = () => {
  const { setCursorHidden } = useCursor();
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const rounded = useTransform(scrollYProgress, [0, 1], ["8px", "0px"]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: photo1,
      scale: scale2,
      borderRadius: rounded,
      alt: "ParallaxScale1",
      style: {
        top: "0",
        left: "0",
        width: "25vw",
        height: "25vh",
      },
    },
    {
      src: photo2,
      scale: scale5,
      borderRadius: rounded,
      alt: "ParallaxScale2",
      style: {
        top: "-30vh",
        left: "5vw",
        width: "35vw",
        height: "30vh",
      },
    },
    {
      src: photo3,
      scale: scale6,
      borderRadius: rounded,
      alt: "ParallaxScale3",
      style: {
        top: "-10vh",
        left: "-25vw",
        width: "20vw",
        height: "45vh",
      },
    },
    {
      src: photo4,
      scale: scale8,
      borderRadius: rounded,
      alt: "ParallaxScale4",
      style: {
        top: "0",
        left: "27.5vw",
        width: "25vw",
        height: "25vh",
      },
    },
    {
      src: photo5,
      scale: scale9,
      borderRadius: rounded,
      alt: "ParallaxScale5",
      style: {
        top: "27.5vh",
        left: "5vw",
        width: "20vw",
        height: "25vh",
      },
    },
  ];

  return (
    <div
      onMouseEnter={() => setCursorHidden(true)}
      onMouseLeave={() => setCursorHidden(false)}
      ref={container}
      className="h-[300vh] relative "
    >
      <div className="sticky top-0 overflow-hidden  h-[100vh]">
        {pictures.map((picture, i) => (
          <motion.div
            style={{
              scale: picture.scale,
            }}
            key={i}
            className="w-full h-full absolute top-0 flex justify-center items-center"
          >
            <motion.div
              style={{
                ...picture.style,
                borderRadius: picture.borderRadius,
              }}
              className="w-[25vw] h-[25vh] relative overflow-hidden"
            >
              <motion.div className="w-full h-full">
                <Image
                  src={picture.src}
                  className="object-cover h-full w-full"
                  alt={picture.alt}
                  fill
                  placeholder="blur"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxScale;
