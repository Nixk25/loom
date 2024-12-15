import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "../../scroll-area";
import { Photo } from "../MainClient";
import EditDialogForm from "./EditDialogForm";
import EditDialogButtons from "./EditDialogButtons";
const EditDialogContent = ({
  photo,
  setIsOpen,
}: {
  photo: Photo;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <DialogContent className="z-[50] w-[90%] rounded-lg max-h-[500px] overflow-auto">
      <ScrollArea>
        <DialogHeader>
          <DialogTitle className="drawerHeadline mb-5">
            Create New Artwork
          </DialogTitle>
        </DialogHeader>

        <EditDialogForm photo={photo} />

        <EditDialogButtons setIsOpen={setIsOpen} />
      </ScrollArea>
    </DialogContent>
  );
};

export default EditDialogContent;
