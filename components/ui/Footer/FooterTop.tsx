import { useCursor } from "@/app/CursorContext";
import React from "react";
import ButtonEnhanced from "../ButtonEnchanced";

const FooterTop = () => {
  const { setCursorBig } = useCursor();
  return (
    <div className="flex container px-5 sm:px-0 flex-col gap-10 justify-center itemc-center">
      <h2
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        className="mainHeadline text-center leading-[50px] sm:leading-[120px] lg:leading-[150px]"
      >
        You are at the end of the page{" "}
      </h2>
      <p className="text-center font-normal text-neutral-500 text-sm sm:text-base lg:text-lg">
        In the time you spent reading this, 5 new creative projects were shared
        on Loom.
      </p>
      <div className="flex justify-center">
        <ButtonEnhanced prevTitle="Register now" size="large" />
      </div>
    </div>
  );
};

export default FooterTop;
