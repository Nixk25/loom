import React from "react";
import ButtonEnhanced from "../../ButtonEnchanced";

const AddNewButtons = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
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
  );
};

export default AddNewButtons;
