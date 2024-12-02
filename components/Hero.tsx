"use client";
import React from "react";
import photoHero1 from "../public/HeroPhotos/photoHero1.jpeg";
import photoHero2 from "../public/HeroPhotos/photoHero2.jpeg";
import photoHero3 from "../public/HeroPhotos/photoHero3.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
const Hero = () => {
  const { setCursorHidden } = useCursor();
  return (
    <section
      onMouseEnter={() => setCursorHidden(false)}
      onMouseLeave={() => setCursorHidden(false)}
      className="flex justify-center items-center min-h-screen"
    >
      <div className="container flex justify-center items-center">
        <div>
          <div className="flex gap-5 sm:justify-start items-center justify-center">
            <motion.h1
              className=" uppercase mainHeadline"
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0.2 }}
              transition={{ delay: 1, ease: "easeOut" }}
            >
              E<span className="font">nr</span>ich
            </motion.h1>
            <motion.div
              animate={{ x: 0, opacity: 1, scale: 1 }}
              initial={{ x: "100%", scale: 0.5 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="xl:h-[160px] xl:w-[220px] sm:w-[150px] w-[120px] rounded-xl xl:mb-5 md:h-[100px] sm:h-[100px] h-[60px]"
            >
              <Image
                src={photoHero1}
                className="object-cover w-full h-full rounded-xl bg-center bg-no-repeat"
                alt="boy thinking about creativity"
              />
            </motion.div>
          </div>
          <div className="flex gap-5 sm:justify-start items-center justify-center">
            <motion.div
              animate={{ x: 0, opacity: 1, scale: 1 }}
              initial={{ x: "-100%", opacity: 0.2, scale: 0.5 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="xl:h-[160px] sm:w-[150px] w-[60px] sm:h-[100px] h-[60px] rounded-xl lg:-mt-[80px] -mt-[10px] sm:-mt-[40px] xl:-mt-[150px]   "
            >
              <Image
                src={photoHero2}
                className="object-cover w-full h-full rounded-xl bg-center bg-no-repeat"
                alt="some creative work in progress"
              />
            </motion.div>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: "100%", opacity: 0.2 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="flex gap-5"
            >
              <h1 className="xl:-mt-[120px] min-[1500px]:-mt-[140px] lg:-mt-[80px] sm:-mt-[40px] -mt-[10px] uppercase mainHeadline">
                y<span className="font">our</span>{" "}
              </h1>
              <h1 className="xl:-mt-[120px] -mt-[10px] min-[1500px]:-mt-[140px] lg:-mt-[80px]  sm:-mt-[40px] uppercase mainHeadline">
                <span className="font">li</span>
                fe
              </h1>
            </motion.div>
          </div>
          <div className="flex gap-5 items-center sm:justify-start justify-center">
            <motion.h1
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0.2 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="xl:-mt-[120px] -mt-[10px] min-[1500px]:-mt-[140px] lg:-mt-[80px] sm:-mt-[40px]  uppercase mainHeadline"
            >
              th<span className="font">roug</span>h
            </motion.h1>
            <motion.div
              animate={{ x: 0, opacity: 1, scale: 1 }}
              initial={{ x: "100%", scale: 0.5, opacity: 0.2 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="xl:h-[160px] sm:h-[100px] h-[60px] sm:w-[150px] w-[80px] rounded-xl xl:-mt-[150px] -mt-[10px] lg:-mt-[80px] sm:-mt-[40px]  "
            >
              <Image
                src={photoHero3}
                className="object-cover w-full h-full rounded-xl bg-center bg-no-repeat"
                alt="some creative work in progress"
              />
            </motion.div>
          </div>
          <div className="flex gap-5 flex-col sm:flex-row ">
            <motion.p
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0.2 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="xl:-mt-[50px]  sm:order-1 order-2 text-sm -mt-[15px] sm:max-w-[280px] text-center sm:text-end font-normal"
            >
              Welcome to Loom, your ultimate destination for creative
              inspiration. Immerse yourself in a vibrant community that
              celebrates diverse forms of design.
            </motion.p>
            <motion.h1
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: "100%", opacity: 0.2 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="xl:-mt-[120px] -mt-[10px] min-[1500px]:-mt-[140px] text-center sm:text-start sm:order-2 order-1 lg:-mt-[80px] sm:-mt-[40px]  uppercase mainHeadline"
            >
              de<span className="font">si</span>gn
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
