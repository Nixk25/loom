"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCursor } from "@/app/CursorContext";

const BackLink = () => {
  const { setCursorBig, setDifferentCursor } = useCursor();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <Link
        key="link-back"
        href="/"
        onMouseEnter={() => {
          setCursorBig(true);
          setDifferentCursor(false);
        }}
        onMouseLeave={() => {
          setCursorBig(false);
          setDifferentCursor(true);
        }}
        className="absolute p-10 top-0 left-0 uppercase text-sm"
      >
        Back
      </Link>
    </motion.div>
  );
};

export default BackLink;
