import React, { useState } from "react";
import { useCursor } from "@/app/CursorContext";
import EditDialog from "./EditDialog";
import { Photo } from "../MainClient";
const EditButton = ({ photo }: { photo: Photo }) => {
  const { setCursorHidden } = useCursor();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <EditDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      photo={photo}
      setCursorHidden={setCursorHidden}
    />
  );
};

export default EditButton;
