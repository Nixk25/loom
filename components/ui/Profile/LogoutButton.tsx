"use client";
import React from "react";
import Link from "next/link";
import { useCursor } from "@/app/CursorContext";

const LogoutButton = () => {
  const { setCursorBig } = useCursor();
  return (
    <div>
      <Link
        key="link-back"
        href="/Register"
        onMouseEnter={() => {
          setCursorBig(true);
        }}
        onMouseLeave={() => {
          setCursorBig(false);
        }}
        className="absolute p-10 top-0 right-0 uppercase text-sm"
      >
        Logout
      </Link>
    </div>
  );
};

export default LogoutButton;
