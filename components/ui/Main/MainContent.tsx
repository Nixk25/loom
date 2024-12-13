"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DrawerPart from "./DrawerPart";
import { useUser } from "@/app/UserContext";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { motion } from "framer-motion";
import { Photo } from "@/app/(pages)/main/page";
type MainContentProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  selectedTags: string[];
  filteredPhotos: Photo[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const MainContent = ({
  filteredPhotos,
  setIsDrawerOpen,
  setSearchQuery,
  isDrawerOpen,
}: MainContentProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const { currentUser } = useUser();
  const [isFocus, setIsFocus] = useState(false);
  const [hoveredPhotoId, setHoveredPhotoId] = useState<number | null>(null);
  const [canDelete, setCanDelete] = useState(false);
  console.log(currentUser);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 min-h-screen p-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="mb-4 break-inside-avoid bg-neutral-300 rounded-md shadow-md w-full h-full relative cursor-pointer"
            onMouseEnter={() => {
              if (currentUser?.role === "admin") {
                setCanDelete(true);
                setHoveredPhotoId(photo.id);
              } else if (currentUser?.role === "manager") {
                if (
                  currentUser?.posts &&
                  currentUser.posts.includes(photo.id)
                ) {
                  setCanDelete(true);
                } else {
                  setCanDelete(false);
                }
                setHoveredPhotoId(photo.id);
              } else if (currentUser?.role === "user") {
                if (
                  currentUser?.posts &&
                  currentUser.posts.includes(photo.id)
                ) {
                  setCanDelete(true);
                } else {
                  setCanDelete(false);
                }
                setHoveredPhotoId(photo.id);
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
                className="w-full h-auto rounded-md "
              />
            </motion.div>
            <motion.div
              animate={
                hoveredPhotoId === photo.id ? { opacity: 1 } : { opacity: 0 }
              }
              className="flex gap-5 absolute top-1/2 left-1/2 -traslate-y-1/2 -translate-x-1/2 "
            >
              {hoveredPhotoId && <EditButton photo={photo} />}
              {canDelete && <DeleteButton photo={photo} />}
            </motion.div>
          </div>
        ))}
      </div>

      <DrawerPart
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        setSearchQuery={setSearchQuery}
        selectedPhoto={selectedPhoto}
        setIsFocus={setIsFocus}
        isFocus={isFocus}
      />
    </>
  );
};

export default MainContent;
