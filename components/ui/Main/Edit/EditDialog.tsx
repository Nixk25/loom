import React from "react";
import { TiPencil } from "react-icons/ti";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Photo } from "../MainClient";
import EditDialogContent from "./EditDialogContent";
const EditDialog = ({
  isOpen,
  setIsOpen,
  photo,
  setCursorHidden,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  photo: Photo;
  setCursorHidden: (hidden: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div
          onMouseEnter={() => setCursorHidden(true)}
          onMouseLeave={() => setCursorHidden(false)}
          className="rounded-full cursor-pointer bg-black p-5 text-white flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out z-[99]"
        >
          <TiPencil size={20} className="cursor-pointer" />
        </div>
      </DialogTrigger>
      <EditDialogContent photo={photo} setIsOpen={setIsOpen} />
    </Dialog>
  );
};

export default EditDialog;
