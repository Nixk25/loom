import React, { useState } from "react";
import { TiPencil } from "react-icons/ti";
import { useCursor } from "@/app/CursorContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "../scroll-area";
import { Input } from "../input";
import { Textarea } from "../textarea";
import ButtonEnhanced from "../ButtonEnchanced";
import { Photo } from "@/app/(pages)/main/page";
const EditButton = ({ photo }: { photo: Photo }) => {
  const { setCursorHidden } = useCursor();
  const [isOpen, setIsOpen] = useState(false);
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
      <DialogContent className="z-[50]   max-h-[500px] overflow-auto">
        <ScrollArea>
          <DialogHeader>
            <DialogTitle className="drawerHeadline mb-5">
              Create New Artwork
            </DialogTitle>
          </DialogHeader>

          <form className="px-5 flex flex-col gap-5">
            <Input
              type="text"
              name="author"
              placeholder="Enter author's name"
              defaultValue={photo.author || ""}
            />
            <Input
              type="text"
              name="imageUrl"
              defaultValue={photo.imageUrl || ""}
              placeholder="Enter image URL"
            />
            <Input
              type="text"
              name="title"
              placeholder="Enter title"
              defaultValue={photo.title || ""}
            />
            <Textarea
              name="description"
              placeholder="Enter description"
              defaultValue={photo.description || ""}
            />

            <div className="flex flex-col gap-5">
              <Input
                type="text"
                name="location"
                placeholder="Enter location"
                defaultValue={photo.details.location || ""}
              />
              <Input
                type="text"
                name="capturedWith"
                placeholder="Enter camera/model"
                defaultValue={photo.details.capturedWith || ""}
              />
              <Input
                type="datetime-local"
                name="date"
                defaultValue={photo.details.date || ""}
              />
              <Textarea
                name="inspiration"
                placeholder="Enter inspiration details"
                defaultValue={photo.details.inspiration || ""}
              />
            </div>

            <Input
              type="text"
              name="similarTags"
              placeholder="Enter similar tags"
              defaultValue={photo.similarTags?.join(", ") || ""}
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
  );
};

export default EditButton;
