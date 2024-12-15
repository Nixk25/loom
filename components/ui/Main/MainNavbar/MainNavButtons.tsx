import React from "react";
import AddNew from "../AddNew/AddNew";
import Link from "next/link";
import { Photo } from "../MainClient";
type MainNavButtonsProps = {
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  isDrawerOpen: boolean;
  setCursorBig: (big: boolean) => void;
};
const MainNavButtons = ({
  isDrawerOpen,
  setCursorBig,
}: MainNavButtonsProps) => {
  return (
    <div className="flex items-center gap-5 justify-center">
      <AddNew />
      <Link
        href="/profile"
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        className="rounded-full  w-28 h-8 border relative flex items-center justify-center px-5 z-[999] cursor-none"
      >
        <span
          className={`absolute w-max px-5 cursor-none ${
            isDrawerOpen ? "text-white" : "text-black"
          }`}
        >
          Your space
        </span>
      </Link>
    </div>
  );
};

export default MainNavButtons;
