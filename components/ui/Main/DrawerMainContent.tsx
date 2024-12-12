import React from "react";
import { useCursor } from "@/app/CursorContext";
import { Photo } from "./MainContent";
import DrawerMainImage from "./DrawerMainImage";
import PhotoDetails from "./PhotoDetails";
import DrawerAuthorInfo from "./DrawerAuthorInfo";
const DrawerMainContent = ({
  isFocus,
  setIsFocus,
  selectedPhoto,
  setSearchQuery,
  setIsDrawerOpen,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPhoto: Photo | null;
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setCursorBig } = useCursor();

  return (
    <div className="flex flex-1 gap-10 items-center justify-center flex-col md:flex-row px-10">
      <div>
        {selectedPhoto && (
          <DrawerMainImage
            selectedPhoto={selectedPhoto}
            isFocus={isFocus}
            setCursorBig={setCursorBig}
            setIsFocus={setIsFocus}
          />
        )}
        <PhotoDetails
          setIsDrawerOpen={setIsDrawerOpen}
          setSearchQuery={setSearchQuery}
          selectedPhoto={selectedPhoto}
          setCursorBig={setCursorBig}
        />
      </div>

      <DrawerAuthorInfo selectedPhoto={selectedPhoto} />
    </div>
  );
};

export default DrawerMainContent;
