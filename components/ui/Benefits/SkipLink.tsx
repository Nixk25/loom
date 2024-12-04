"use client";
import React from "react";
import Link from "next/link";
import { useCursor } from "@/app/CursorContext";
const SkipLink = () => {
  const { setCursorBig, setDifferentCursor } = useCursor();
  return (
    <Link
      key="link-skip"
      href="Register"
      onMouseEnter={() => {
        setCursorBig(true);
        setDifferentCursor(false);
      }}
      onMouseLeave={() => {
        setCursorBig(false);
        setDifferentCursor(true);
      }}
      className="absolute p-10 top-0 right-0 uppercase text-sm"
    >
      Skip
    </Link>
  );
};

export default SkipLink;
