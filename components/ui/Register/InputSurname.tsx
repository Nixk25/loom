import React from "react";
import { motion } from "framer-motion";
import { Input } from "../input";
type InputSurnameProps = {
  focusedInput: string | null;
  surname: string;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  handleFocus: (inputName: string) => void;
  handleBlur: () => void;
};
const InputSurname = ({
  focusedInput,
  surname,
  setSurname,
  handleInputChange,
  handleFocus,
  handleBlur,
}: InputSurnameProps) => {
  return (
    <div className="relative">
      <motion.label
        animate={{
          right: focusedInput === "surname" || surname ? 0 : "82%",
          opacity: focusedInput === "surname" || surname ? 0.6 : 1,
        }}
        className={`absolute text-xl font-thin transition-all `}
        htmlFor="surname"
      >
        Last name
      </motion.label>
      <Input
        type="text"
        name="surname"
        value={surname}
        onChange={(e) => handleInputChange(e, setSurname)}
        onFocus={() => handleFocus("surname")}
        onBlur={handleBlur}
        className="border-l-0 border-t-0 border-r-0 rounded-none border-b border-black w-full"
      />
    </div>
  );
};

export default InputSurname;
