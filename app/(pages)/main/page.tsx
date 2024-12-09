"use client";
import Cursor from "@/components/ui/Cursor";
import FooterBottom from "@/components/ui/Footer/FooterBottom";
import MainContent from "@/components/ui/Main/MainContent";
import MainNav from "@/components/ui/Main/MainNav";
import MainText from "@/components/ui/Main/MainText";
import SearchBar from "@/components/ui/Main/SearchBar";
import React, { useState } from "react";

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section className="flex justify-center items-center ">
      <MainNav isDrawerOpen={isDrawerOpen} />
      <Cursor />
      <div className="flex mt-[150px] justify-center flex-col items-center gap-10">
        <MainText />
        <SearchBar />
        <MainContent
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />

        <FooterBottom />
      </div>
    </section>
  );
};

export default Main;
