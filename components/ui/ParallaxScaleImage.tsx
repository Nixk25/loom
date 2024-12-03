import React from "react";
import { motion, MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ParallaxScaleImageProps = {
  picture: {
    src: StaticImageData;
    scale: MotionValue<number>;
    borderRadius: MotionValue<string>;
    alt: string;
    style: {
      top: string;
      left: string;
      width: string;
      height: string;
    };
  };
};
const ParallaxScaleImage = ({ picture }: ParallaxScaleImageProps) => {
  return (
    <motion.div
      style={{
        scale: picture.scale,
      }}
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
  );
};

export default ParallaxScaleImage;
