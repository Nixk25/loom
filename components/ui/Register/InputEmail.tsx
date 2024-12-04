import React from "react";
import { motion } from "framer-motion";
import { Input } from "../input";

type InputEmailProps = {
  focusedInput: string | null;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  handleFocus: (inputName: string) => void;
  handleBlur: () => void;
};
const InputEmail = ({
  focusedInput,
  email,
  setEmail,
  handleInputChange,
  handleFocus,
  handleBlur,
}: InputEmailProps) => {
  return (
    <div className="relative">
      <motion.label
        animate={{
          right: focusedInput === "email" || email ? 0 : "90%",
          opacity: focusedInput === "email" || email ? 0.6 : 1,
        }}
        className={`absolute text-xl font-thin transition-all `}
        htmlFor="email"
      >
        Email
      </motion.label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleInputChange(e, setEmail)}
        onFocus={() => handleFocus("email")}
        onBlur={handleBlur}
        className="border-l-0 border-t-0 border-r-0 rounded-none border-b border-black w-full"
      />
    </div>
  );
};

export default InputEmail;
