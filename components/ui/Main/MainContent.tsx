"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DrawerPart from "./DrawerPart";

type MainContentProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  selectedTags: string[];
  filteredPhotos: Photo[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type Photo = {
  id: number;
  author: string;
  imageUrl: string;
  title: string;
  description: string;
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

const MainContent = ({
  filteredPhotos,
  setIsDrawerOpen,
  setSearchQuery,
  isDrawerOpen,
}: MainContentProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const [isFocus, setIsFocus] = useState(false);

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
            className="mb-4 break-inside-avoid bg-neutral-300 rounded-md shadow-md w-full h-full cursor-pointer"
            onClick={() => {
              setSelectedPhoto(photo);
              setIsDrawerOpen(true);
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
