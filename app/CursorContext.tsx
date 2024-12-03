"use client";
import React, { createContext, useContext, useState } from "react";

type CursorContextType = {
  isCursorHidden: boolean;
  setCursorHidden: (hidden: boolean) => void;
  differentCursor: boolean;
  setDifferentCursor: (different: boolean) => void;
  isCursorBig: boolean;
  setCursorBig: (big: boolean) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCursorHidden, setCursorHidden] = useState(false);
  const [differentCursor, setDifferentCursor] = useState(false);
  const [isCursorBig, setCursorBig] = useState(false);

  return (
    <CursorContext.Provider
      value={{
        isCursorHidden,
        setCursorHidden,
        differentCursor,
        setDifferentCursor,
        isCursorBig,
        setCursorBig,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
