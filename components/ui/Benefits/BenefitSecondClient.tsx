"use client";
import { useCursor } from "@/app/CursorContext";
import Cursor from "@/components/ui/Cursor";
import Link from "next/link";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BackLink from "@/components/ui/Benefits/BackLink";
import SkipLink from "@/components/ui/Benefits/SkipLink";
import BenefitSecondText from "@/components/ui/Benefits/BenefitSecondText";
const BenefitSecondClient = () => {
  useEffect(() => {
    document.body.style.setProperty("height", "100vh", "important");
    document.body.style.setProperty("overflow", "hidden", "important");
    setDifferentCursor(true);
    return () => {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    };
  }, []);
  const { setDifferentCursor } = useCursor();
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center min-h-screen w-full">
      <BackLink />
      <SkipLink />
      <Cursor />
      <Link
        onMouseEnter={() => setDifferentCursor(true)}
        onMouseLeave={() => setDifferentCursor(false)}
        href="/benefitthird"
        className="h-screen flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          <BenefitSecondText />
        </AnimatePresence>
      </Link>
    </section>
  );
};

export default BenefitSecondClient;
