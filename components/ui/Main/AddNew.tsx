import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ButtonEnhanced from "../ButtonEnchanced";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { ScrollArea } from "../scroll-area";
const AddNew = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative z-0" onClick={() => setIsOpen(true)}>
        <ButtonEnhanced prevTitle="Create" size="small" />
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-[50]   max-h-[500px] overflow-auto">
          <ScrollArea>
            <DialogHeader>
              <DialogTitle className="drawerHeadline mb-5">
                Create New Artwork
              </DialogTitle>
            </DialogHeader>

            <form className="flex flex-col gap-5 px-5">
              <Input
                type="text"
                name="author"
                placeholder="Enter author's name"
              />
              <Input
                type="text"
                name="imageUrl"
                placeholder="Enter image URL"
              />
              <Input type="text" name="title" placeholder="Enter title" />
              <Textarea name="description" placeholder="Enter description" />

              <div className=" flex flex-col gap-5">
                <Input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                />
                <Input
                  type="text"
                  name="capturedWith"
                  placeholder="Enter camera/model"
                />
                <Input type="datetime-local" name="date" />
                <Textarea
                  name="inspiration"
                  placeholder="Enter inspiration details"
                />
              </div>

              <Input
                type="text"
                name="similarTags"
                placeholder="Enter similar tags"
              />
            </form>
            <div className="flex gap-5 justify-center mt-5">
              <div className="relative z-0" onClick={() => setIsOpen(false)}>
                <ButtonEnhanced prevTitle="Create" size="small" />
              </div>
              <div className="relative z-0" onClick={() => setIsOpen(false)}>
                <ButtonEnhanced
                  type="button"
                  variant="outline"
                  prevTitle="Cancel"
                  size="small"
                />
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNew;
