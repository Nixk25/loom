"use client";
import React from "react";
import Link from "next/link";
import { useCursor } from "@/app/CursorContext";

const BackProfileButton = () => {
  const { setCursorBig } = useCursor();
  return (
    <div>
      <Link
        key="link-back"
        href="/main"
        onMouseEnter={() => {
          setCursorBig(true);
        }}
        onMouseLeave={() => {
          setCursorBig(false);
        }}
        className="absolute p-10 top-0 left-0 uppercase text-sm"
      >
        Back
      </Link>
    </div>
  );
};

export default BackProfileButton;
