"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LiaDownloadSolid } from "react-icons/lia";
import ButtonEnhanced from "../ButtonEnchanced";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
type Photo = {
  id: number;
  postedBy: string;
  imageUrl: string;
  description: string;
  story: string;
  details: {
    location: string;
    capturedWith: string;
    date: string;
    time: string;
    inspiration: string;
    medium?: string;
    dimensions?: string;
    completionDate?: string;
    material?: string;
    height?: string;
    installationDate?: string;
  };
  similarTags: string[];
};

type MainContentProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
};

const MainContent = ({ setIsDrawerOpen, isDrawerOpen }: MainContentProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const [isFocus, setIsFocus] = useState(false);
  const { setCursorBig } = useCursor();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/data/photos.json");
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

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
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 p-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="mb-4 break-inside-avoid bg-neutral-300 rounded-md shadow-md w-full h-full cursor-pointer"
            onClick={() => {
              setSelectedPhoto(photo); // Nastaví vybraný obrázek
              setIsDrawerOpen(true); // Otevře Drawer
            }}
          >
            <Image
              src={photo.imageUrl}
              alt={photo.description}
              placeholder="blur"
              blurDataURL={photo.imageUrl}
              width={400}
              height={400}
              className="w-full h-auto rounded-md"
            />
          </div>
        ))}
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="h-[80%] ">
          <ScrollArea>
            <DrawerHeader className="hidden">
              <DrawerTitle className=" hidden" aria-readonly>
                {selectedPhoto?.description}
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col w-full items-center gap-10 mt-4">
              <div className="flex flex-1 gap-10 items-center justify-center flex-col md:flex-row px-10">
                <div>
                  {selectedPhoto && (
                    <div
                      onMouseEnter={() => setIsFocus(true)}
                      onMouseLeave={() => setIsFocus(false)}
                      className="h-[500px] relative overflow-hidden  flex "
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
                  )}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedPhoto?.similarTags.map((tag, index) => (
                        <span
                          onMouseEnter={() => setCursorBig(true)}
                          onMouseLeave={() => setCursorBig(false)}
                          key={index}
                          className="bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm text-neutral-500">
                      {selectedPhoto?.details?.date}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h1 className="mainHeadline flex justify-center text-center  md:justify-end md:text-end md:leading-[150px]">
                    {selectedPhoto?.postedBy}
                  </h1>
                  <p className="flex text-sm text-neutral-500  justify-center text-center  md:justify-end md:text-end md:mt-10">
                    {selectedPhoto?.story}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  Location <p>{selectedPhoto?.details.location}</p>
                </div>

                <div>
                  Captured with <p>{selectedPhoto?.details.capturedWith}</p>
                </div>

                <div>
                  Time <p>{selectedPhoto?.details.time}</p>
                </div>

                <div>
                  Inspiration <p>{selectedPhoto?.details.inspiration}</p>
                </div>

                {/* If the photo has additional details */}
                {selectedPhoto?.details.medium && (
                  <div>
                    Medium <p>{selectedPhoto?.details.medium}</p>
                  </div>
                )}

                {selectedPhoto?.details.dimensions && (
                  <div>
                    Dimensions <p>{selectedPhoto?.details.dimensions}</p>
                  </div>
                )}

                {selectedPhoto?.details.completionDate && (
                  <div>
                    Completion Date{" "}
                    <p>{selectedPhoto?.details.completionDate}</p>
                  </div>
                )}

                {selectedPhoto?.details.material && (
                  <div>
                    Material <p>{selectedPhoto?.details.material}</p>
                  </div>
                )}

                {selectedPhoto?.details.height && (
                  <div>
                    Height <p>{selectedPhoto?.details.height}</p>
                  </div>
                )}

                {selectedPhoto?.details.installationDate && (
                  <div>
                    Installation Date{" "}
                    <p>{selectedPhoto?.details.installationDate}</p>
                  </div>
                )}
              </div>
            </div>

            <DrawerFooter className="mt-4 flex justify-center items-center">
              <div
                aria-readonly
                className="absolute top-2 right-5 hidden"
                onClick={() => setIsDrawerOpen(false)}
              >
                <ButtonEnhanced prevTitle="Close" />
              </div>
            </DrawerFooter>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainContent;
