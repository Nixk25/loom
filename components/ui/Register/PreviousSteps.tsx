import React from "react";
import { AnimatePresence } from "framer-motion";
import RevolutionText from "./RevolutionText";
import ShapeFutureText from "./ShapeFutureText";
import RegisterText from "./RegisterText";
const PreviousSteps = ({ currentStep }: { currentStep: string }) => {
  return (
    <>
      <AnimatePresence>
        {currentStep === "revolution" && <RevolutionText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "shapeFuture" && <ShapeFutureText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "register" && <RegisterText />}
      </AnimatePresence>
    </>
  );
};

export default PreviousSteps;
