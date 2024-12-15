import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
import InputName from "./Inputs/InputName";
import InputSurname from "./Inputs/InputSurname";
import InputEmail from "./Inputs/InputEmail";
import ButtonEnhanced from "../ButtonEnchanced";

interface RegisterInputsProps {
  error: string | null;
  isTransition: boolean;
  setIsTransition: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsBlocksAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterInputs = ({
  error,
  isTransition,
  setIsTransition,
  setIsLogin,
  isLogin,
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
  setIsBlocksAnimating,
}: RegisterInputsProps) => {
  const { setCursorBig } = useCursor();

  return (
    <AnimatePresence mode="wait">
      {!isTransition && (
        <motion.div
          onMouseEnter={() => setCursorBig(false)}
          key={isLogin ? "login" : "register"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: isTransition ? 0 : 1 }}
          exit={{ opacity: 0 }}
          className="w-[70%] flex flex-col gap-10"
        >
          {!isLogin && (
            <AnimatePresence mode="wait">
              <InputName
                key="input-name"
                focusedInput={focusedInput}
                name={name}
                setName={setName}
                handleInputChange={handleInputChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
              <InputSurname
                key="input-surname"
                focusedInput={focusedInput}
                surname={surname}
                setSurname={setSurname}
                handleInputChange={handleInputChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
            </AnimatePresence>
          )}

          <InputEmail
            error={error}
            focusedInput={focusedInput}
            email={email}
            setEmail={setEmail}
            handleInputChange={handleInputChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-red-500"
            >
              {error}
            </motion.p>
          )}
          <div
            onMouseEnter={() => setCursorBig(true)}
            onMouseLeave={() => setCursorBig(false)}
            onClick={() => {
              setIsTransition(true);
              setIsLogin((prev) => !prev);
              setIsBlocksAnimating((prev) => !prev);
            }}
          >
            {isLogin
              ? "Don’t have an account? Register now!"
              : "Already have an account? Log in!"}
          </div>

          <div className="flex justify-center">
            <ButtonEnhanced
              type="submit"
              prevTitle={isLogin ? "Log In" : "Register"}
              size="large"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterInputs;
