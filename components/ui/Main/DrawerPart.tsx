import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import ButtonEnhanced from "../ButtonEnchanced";
import DrawerMainContent from "./DrawerMainContent";
import { Photo } from "./MainClient";
import DrawerDetails from "./DrawerDetails";

const DrawerPart = ({
  setSearchQuery,
  isDrawerOpen,
  setIsDrawerOpen,
  selectedPhoto,
  setIsFocus,
  isFocus,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPhoto: Photo | null;
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const details = [
    { label: "Location", value: selectedPhoto?.details.location },
    { label: "Captured", value: selectedPhoto?.details.capturedWith },
    { label: "Time", value: selectedPhoto?.details.time },
    { label: "Inspiration", value: selectedPhoto?.details.inspiration },
    { label: "Medium", value: selectedPhoto?.details.medium },
    { label: "Dimensions", value: selectedPhoto?.details.dimensions },
    { label: "Completion Date", value: selectedPhoto?.details.completionDate },
    { label: "Material", value: selectedPhoto?.details.material },
    {
      label: "Installation Date",
      value: selectedPhoto?.details.installationDate,
    },
  ];
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent className="h-[80%] ">
        <ScrollArea>
          <DrawerHeader className="hidden">
            <DrawerTitle className=" hidden" aria-readonly>
              {selectedPhoto?.description}
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col w-full items-center gap-10 mt-4">
            <DrawerMainContent
              setIsDrawerOpen={setIsDrawerOpen}
              isDrawerOpen={isDrawerOpen}
              setSearchQuery={setSearchQuery}
              selectedPhoto={selectedPhoto}
              setIsFocus={setIsFocus}
              isFocus={isFocus}
            />

            <DrawerDetails details={details} />
          </div>

          <DrawerFooter className="mt-4 flex justify-center items-center">
            <div
              aria-readonly
              className="absolute top-2 right-5 hidden"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ButtonEnhanced prevTitle="Close" />
            </div>
          </DrawerFooter>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerPart;
