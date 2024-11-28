import React from "react";
import ButtonEnhanced from "./ui/ButtonEnchanced";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-10">
        <span>LOGO</span>
        <div className="md:flex hidden gap-4">
          <span>Explore</span>
          <span>Design trends</span>
        </div>
      </div>
      <div className=" items-center gap-5 hidden sm:flex">
        <ButtonEnhanced size="small" prevTitle="Join us" />
        <ButtonEnhanced size="small" prevTitle="Start your journey" />
      </div>
    </nav>
  );
};

export default Navbar;
