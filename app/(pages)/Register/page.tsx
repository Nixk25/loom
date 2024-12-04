"use client";
import { useCursor } from "@/app/CursorContext";
import Cursor from "@/components/ui/Cursor";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackLink from "@/components/ui/Benefits/BackLink";
import RevolutionText from "@/components/ui/Register/RevolutionText";
import ShapeFutureText from "@/components/ui/Register/ShapeFutureText";
import RegisterText from "@/components/ui/Register/RegisterText";
import RegisterBlocks from "@/components/ui/Register/RegisterBlocks";
import RegisterInputs from "@/components/ui/Register/RegisterInputs";

const Register = () => {
  const { setDifferentCursor } = useCursor();
  const [currentStep, setCurrentStep] = useState<
    "revolution" | "shapeFuture" | "register" | "inputs"
  >("revolution");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  useEffect(() => {
    const revolutionTimer = setTimeout(() => {
      setCurrentStep("shapeFuture");
    }, 2000);
    const shapeFutureTimer = setTimeout(() => {
      setCurrentStep("register");
    }, 4000);

    setDifferentCursor(false);

    return () => {
      clearTimeout(revolutionTimer);
      clearTimeout(shapeFutureTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.setProperty("height", "100vh", "important");
    document.body.style.setProperty("overflow", "hidden", "important");

    return () => {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    };
  }, []);

  const handleSectionClick = () => {
    setCurrentStep("inputs");
  };

  return (
    <section
      onClick={handleSectionClick} // Tohle je místo pro kliknutí na celou sekci
      onMouseEnter={() => setDifferentCursor(false)}
      className="flex overflow-hidden flex-col justify-center items-center min-h-screen w-full relative"
    >
      <Cursor />
      <BackLink />

      <AnimatePresence>
        {currentStep === "revolution" && <RevolutionText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "shapeFuture" && <ShapeFutureText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "register" && <RegisterText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "inputs" && (
          <>
            <RegisterBlocks />
            <RegisterInputs
              name={name}
              setName={setName}
              surname={surname}
              setSurname={setSurname}
              focusedInput={focusedInput}
              email={email}
              setEmail={setEmail}
              handleInputChange={handleInputChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Register;
