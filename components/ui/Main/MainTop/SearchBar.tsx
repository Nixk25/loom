"use client";
import React, { useState } from "react";
import { Input } from "../../input";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useCursor } from "@/app/CursorContext";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const { setCursorBig } = useCursor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-[80%]  max-w-[700px] ">
      <motion.label
        animate={isFocused || searchQuery ? { opacity: 0 } : { opacity: 1 }}
        className="absolute pointer-events-none select-none z-0 font-thin left-5 top-1/2 -translate-y-1/2 transition-all text-nowrap uppercase text-sm text-neutral-400"
        htmlFor="name"
      >
        Search for inspo
      </motion.label>
      <Input
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        onBlur={() => setIsFocused(false)}
        type="text"
        name="name"
        value={searchQuery}
        className="rounded-full shadow-md py-7 pl-5 w-full relative z-0"
      />
      <motion.div
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        animate={
          isFocused || searchQuery
            ? { scale: 1, y: "25%" }
            : { scale: 0, y: "25%" }
        }
        className="absolute right-5 top-0 origin-center"
      >
        <div className="rounded-full relative bg-neutral-900 size-10">
          <FaSearch className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;
