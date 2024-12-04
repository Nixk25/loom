import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
import InputName from "./InputName";
import InputSurname from "./InputSurname";
import InputEmail from "./InputEmail";

interface RegisterInputsProps {
  focusedInput: string | null;
  name: string;
  surname: string;
  email: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  handleFocus: (inputName: string) => void;
  handleBlur: () => void;
}
const RegisterInputs = ({
  focusedInput,
  name,
  surname,
  email,
  setName,
  setSurname,
  setEmail,
  handleInputChange,
  handleFocus,
  handleBlur,
}: RegisterInputsProps) => {
  const { setCursorBig } = useCursor();

  return (
    <motion.div
      onMouseEnter={() => setCursorBig(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      className="w-[70%] flex flex-col gap-10"
    >
      <InputName
        focusedInput={focusedInput}
        name={name}
        setName={setName}
        handleInputChange={handleInputChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <InputSurname
        focusedInput={focusedInput}
        surname={surname}
        setSurname={setSurname}
        handleInputChange={handleInputChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <InputEmail
        focusedInput={focusedInput}
        email={email}
        setEmail={setEmail}
        handleInputChange={handleInputChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
    </motion.div>
  );
};

export default RegisterInputs;
