import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "../../scroll-area";
import AddNewButtons from "./AddNewButtons";
import AddNewForm from "./AddNewForm";
const AddNewDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="z-[50] w-[90%] rounded-lg  max-h-[500px] overflow-auto">
        <ScrollArea>
          <DialogHeader>
            <DialogTitle className="drawerHeadline mb-5">
              Create New Artwork
            </DialogTitle>
          </DialogHeader>

          <AddNewForm />
          <AddNewButtons setIsOpen={setIsOpen} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewDialog;
