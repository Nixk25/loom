import React, { useState } from "react";

import ButtonEnhanced from "../../ButtonEnchanced";
import AddNewDialog from "./AddNewDialog";

const AddNew = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative z-0" onClick={() => setIsOpen(true)}>
        <ButtonEnhanced prevTitle="Create" size="small" />
      </div>
      <AddNewDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AddNew;
