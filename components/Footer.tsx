import React from "react";
import { Separator } from "@/components/ui/separator";
import { FOOTERLINKS } from "@/app/constants";
import { SOCIALS } from "@/app/constants";
import logo from "../app/assets/icons/Loom.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      className="my-10 relative h-[1000px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed h-[1000px]  bottom-0 flex flex-col justify-center items-center w-full ">
        <h2 className="mainHeadline leading-[130px]">
          You are at the end of the page, so are we{" "}
        </h2>
        <Image src={logo} alt="logo" height={100} width={100} />
        <Separator className="my-6 w-full" />
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between items-center  container">
          <div className="flex gap-4 flex-col sm:flex-row items-center">
            {FOOTERLINKS.map(({ name, isUnderlined }, i) =>
              isUnderlined ? (
                <a key={i} className={` ${isUnderlined ? "underline" : ""}`}>
                  {name}
                </a>
              ) : (
                <span key={i}>{name}</span>
              )
            )}
          </div>
          <div className="flex gap-4 items-center">
            {SOCIALS.map(({ icon: Icon }, i) => (
              <a
                key={i}
                className="hover:text-black/50 active:scale-90"
                rel="noreferrer"
              >
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
