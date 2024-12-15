import React from "react";
import Image from "next/image";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Photo } from "../MainClient";
const DeleteDialogContent = ({ photo }: { photo: Photo }) => {
  return (
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
  );
};

export default DeleteDialogContent;
