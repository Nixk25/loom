import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCursor } from "@/app/CursorContext";
import { Photo } from "@/app/(pages)/main/page";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
      <AlertDialogContent className="max-w-[300px] max-h-[500px] overflow-auto sm:max-w-[500px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your post
            named{" "}
          </AlertDialogDescription>
          <span className="font-bold text-center text-neutral-900 text-lg">
            {photo.title}
          </span>
          <div className=" max-w-[300px] flex  justify-center items-center mx-auto my-5">
            <Image
              src={photo.imageUrl}
              alt={photo.description}
              width={200}
              placeholder="blur"
              className="w-full h-full object-cover rounded-md"
              blurDataURL={photo.imageUrl}
              height={200}
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
