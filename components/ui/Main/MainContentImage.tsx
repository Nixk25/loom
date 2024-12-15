import React, { useState } from "react";
import Image from "next/image";
import { useUser } from "@/app/UserContext";
import EditButton from "./Edit/EditButton";
import DeleteButton from "./Delete/DeleteButton";
import { motion } from "framer-motion";
import { Photo } from "./MainClient";
const MainContentImage = ({
  photo,
  setIsDrawerOpen,
  setSelectedPhoto,
}: {
  photo: Photo;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<Photo | null>>;
}) => {
  const [canDelete, setCanDelete] = useState(false);
  const [hoveredPhotoId, setHoveredPhotoId] = useState<number | null>(null);
  const { currentUser } = useUser();
  return (
    <div
      key={photo.id}
      className="mb-4 break-inside-avoid bg-neutral-300 rounded-md shadow-md w-full h-full relative cursor-pointer flex justify-center items-center"
      onMouseEnter={() => {
        if (currentUser?.role === "admin") {
          setCanDelete(true);
          setHoveredPhotoId(photo.id);
        } else if (currentUser?.role === "manager") {
          if (currentUser?.posts && currentUser.posts.includes(photo.id)) {
            setCanDelete(true);
          } else {
            setCanDelete(false);
          }
          setHoveredPhotoId(photo.id);
        } else if (currentUser?.role === "user") {
          if (currentUser?.posts && currentUser.posts.includes(photo.id)) {
            setCanDelete(true);
            setHoveredPhotoId(photo.id);
          } else {
            setCanDelete(false);
          }
        } else {
          setCanDelete(false);
          setHoveredPhotoId(null);
        }
      }}
      onMouseLeave={() => {
        setCanDelete(false);
        setHoveredPhotoId(null);
      }}
    >
      <motion.div
        className="w-full"
        onClick={() => {
          setSelectedPhoto(photo);
          setIsDrawerOpen(true);
        }}
        animate={
          hoveredPhotoId === photo.id
            ? { filter: "blur(5px)" }
            : { filter: "blur(0px)" }
        }
      >
        <Image
          src={photo.imageUrl}
          alt={photo.description}
          placeholder="blur"
          blurDataURL={photo.imageUrl}
          width={400}
          height={400}
          className="w-full h-auto rounded-md object-cover "
        />
      </motion.div>
      <motion.div
        animate={hoveredPhotoId === photo.id ? { opacity: 1 } : { opacity: 0 }}
        className="flex justify-center items-center gap-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
      >
        {hoveredPhotoId && <EditButton photo={photo} />}
        {canDelete && <DeleteButton photo={photo} />}
      </motion.div>
    </div>
  );
};

export default MainContentImage;
