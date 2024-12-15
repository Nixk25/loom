import React from "react";
import { motion } from "framer-motion";
import { Input } from "../../input";
import { useMediaQuery } from "react-responsive";
type InputEmailProps = {
  error: string | null;
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
  error,
  focusedInput,
  email,
  setEmail,
  handleInputChange,
  handleFocus,
  handleBlur,
}: InputEmailProps) => {
  const IsDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="relative">
      <motion.label
        animate={
          IsDesktop
            ? {
                left: focusedInput === "email" || email ? "90%" : "0%",
                opacity: focusedInput === "email" || email ? 0.6 : 1,
              }
            : {
                opacity: focusedInput === "email" || email ? 0 : 1,
              }
        }
        className="absolute pointer-events-none select-none z-0 text-xl font-thin transition-all "
        htmlFor="email"
      >
        Email
      </motion.label>
      <Input
        required
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleInputChange(e, setEmail)}
        onFocus={() => handleFocus("email")}
        onBlur={handleBlur}
        className={`border-l-0 border-t-0 border-r-0 rounded-none border-b border-black w-full ${
          error ? "border-red-500" : ""
        }`}
      />
    </div>
  );
};

export default InputEmail;
