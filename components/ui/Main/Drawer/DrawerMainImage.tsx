import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";
import { Photo } from "../MainClient";
const DrawerMainImage = ({
  isFocus,
  setIsFocus,
  selectedPhoto,
  setCursorBig,
}: {
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPhoto: Photo;
  setCursorBig: (big: boolean) => void;
}) => {
  return (
    <div
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
      className="h-[500px] relative overflow-hidden flex "
    >
      <Image
        placeholder="blur"
        src={selectedPhoto.imageUrl}
        alt={selectedPhoto.description}
        blurDataURL={selectedPhoto.imageUrl}
        height={700}
        width={700}
        className="rounded-lg h-full object-cover"
      />
      <motion.div
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        animate={isFocus ? { opacity: 1 } : { opacity: 0 }}
        className="absolute top-2 right-2 rounded-full size-10 bg-neutral-900 text-white text-xl"
      >
        <LiaDownloadSolid className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
      </motion.div>
    </div>
  );
};

export default DrawerMainImage;
