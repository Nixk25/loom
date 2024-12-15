"use client";

import React, { useState, useEffect } from "react";
import DrawerPart from "./Drawer/DrawerPart";
import { Photo } from "./MainClient";
import MainContentImage from "./MainContentImage";
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
          <MainContentImage
            key={photo.id}
            setIsDrawerOpen={setIsDrawerOpen}
            photo={photo}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))}
      </div>

      <DrawerPart
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        setSearchQuery={setSearchQuery}
        selectedPhoto={selectedPhoto}
      />
    </>
  );
};

export default MainContent;
