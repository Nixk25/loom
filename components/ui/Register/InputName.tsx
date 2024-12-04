import React from "react";
import { motion } from "framer-motion";
import { Input } from "../input";

type InputNameProps = {
  focusedInput: string | null;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  handleFocus: (inputName: string) => void;
  handleBlur: () => void;
};
const InputName = ({
  focusedInput,
  name,
  setName,
  handleInputChange,
  handleFocus,
  handleBlur,
}: InputNameProps) => {
  return (
    <div className="relative w-full">
      <motion.label
        animate={{
          right: focusedInput === "name" || name ? 0 : "82%",
          opacity: focusedInput === "name" || name ? 0.6 : 1,
        }}
        className={`absolute text-xl font-thin transition-all `}
        htmlFor="name"
      >
        First name
      </motion.label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={(e) => handleInputChange(e, setName)}
        onFocus={() => handleFocus("name")}
        onBlur={handleBlur}
        className="border-l-0 border-t-0 border-r-0 rounded-none border-b border-black w-full"
      />
    </div>
  );
};

export default InputName;
