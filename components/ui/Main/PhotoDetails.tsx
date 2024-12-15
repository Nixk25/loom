import React from "react";
import { Photo } from "./MainClient";
const PhotoDetails = ({
  selectedPhoto,
  setSearchQuery,
  setCursorBig,
  setIsDrawerOpen,
}: {
  selectedPhoto: Photo | null;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCursorBig: (big: boolean) => void;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between mt-3 ">
      <div className="flex flex-wrap gap-2 mt-3 max-w-[70%]">
        {selectedPhoto?.similarTags.map((tag, index) => (
          <span
            onMouseEnter={() => setCursorBig(true)}
            onMouseLeave={() => setCursorBig(false)}
            onClick={() => {
              setSearchQuery(tag.toLowerCase());
              setIsDrawerOpen(false);
            }}
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
  );
};

export default PhotoDetails;
