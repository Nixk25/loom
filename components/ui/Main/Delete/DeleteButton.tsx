import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCursor } from "@/app/CursorContext";
import { Photo } from "../MainClient";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import DeleteDialogContent from "./DeleteDialogContent";

const DeleteButton = ({ photo }: { photo: Photo }) => {
  const { setCursorHidden } = useCursor();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {" "}
        <div
          onMouseEnter={() => setCursorHidden(true)}
          onMouseLeave={() => setCursorHidden(false)}
          className="rounded-full cursor-pointer bg-black p-5 text-white flex justify-center items-center hover:bg-red-500 transition-all duration-300 ease-in-out"
        >
          <RiDeleteBinLine size={20} className="cursor-pointer" />
        </div>
      </AlertDialogTrigger>
      <DeleteDialogContent photo={photo} />
    </AlertDialog>
  );
};

export default DeleteButton;
