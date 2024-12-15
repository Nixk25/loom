"use client";
import { useCursor } from "@/app/CursorContext";
import Cursor from "@/components/ui/Cursor";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackLink from "@/components/ui/Benefits/BackLink";
import RegisterBlocks from "@/components/ui/Register/RegisterBlocks";
import PreviousSteps from "./PreviousSteps";
import RegisterForm from "./RegisterForm";

const RegisterClient = () => {
  const { setDifferentCursor } = useCursor();
  const [currentStep, setCurrentStep] = useState<
    "revolution" | "shapeFuture" | "register" | "inputs"
  >("revolution");

  const [isBlocksAnimating, setIsBlocksAnimating] = useState(false);

  useEffect(() => {
    setDifferentCursor(false);
  }, []);

  useEffect(() => {
    const revolutionTimer = setTimeout(() => {
      setCurrentStep("shapeFuture");
    }, 2000);
    const shapeFutureTimer = setTimeout(() => {
      setCurrentStep("register");
    }, 4000);

    return () => {
      clearTimeout(revolutionTimer);
      clearTimeout(shapeFutureTimer);
    };
  }, [setDifferentCursor]);

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
      onClick={handleSectionClick}
      onMouseEnter={() => setDifferentCursor(false)}
      className="flex overflow-hidden flex-col justify-center items-center min-h-screen w-full relative"
    >
      <Cursor />
      <BackLink />

      <PreviousSteps currentStep={currentStep} />
      <AnimatePresence>
        {currentStep === "inputs" && (
          <>
            <RegisterBlocks isBlocksAnimating={isBlocksAnimating} />

            <RegisterForm setIsBlocksAnimating={setIsBlocksAnimating} />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegisterClient;
