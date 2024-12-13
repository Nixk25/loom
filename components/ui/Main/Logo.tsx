import React from "react";
import Link from "next/link";
import LoomLogo from "@/components/ui/LoomLogo";
type LogoProps = {
  setCursorBig: (big: boolean) => void;
  IsDesktop: boolean;
  isDrawerOpen: boolean;
};
const Logo = ({ setCursorBig, IsDesktop, isDrawerOpen }: LogoProps) => {
  return (
    <Link
      href="/main"
      onMouseEnter={() => setCursorBig(true)}
      onMouseLeave={() => setCursorBig(false)}
    >
      <div
        className={` ${
          IsDesktop ? "size-[80px]" : "size-[100px]"
        } cursor-pointer ${isDrawerOpen ? "text-white" : "text-black"}`}
      >
        <LoomLogo />
      </div>
    </Link>
  );
};

export default Logo;
