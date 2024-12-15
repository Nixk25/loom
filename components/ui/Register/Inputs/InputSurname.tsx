import React from "react";
import { motion } from "framer-motion";
import { Input } from "../../input";
import { useMediaQuery } from "react-responsive";
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
  const IsDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="relative">
      <motion.label
        animate={
          IsDesktop
            ? {
                left: focusedInput === "surname" || surname ? "85%" : "0%",
                opacity: focusedInput === "surname" || surname ? 0.6 : 1,
              }
            : {
                opacity: focusedInput === "surname" || surname ? 0 : 1,
              }
        }
        className="absolute pointer-events-none select-none z-0 text-xl font-thin transition-all text-nowrap"
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
