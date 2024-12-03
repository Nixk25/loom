"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "react-responsive";
import FooterBottom from "./ui/FooterBottom";
import FooterTop from "./ui/FooterTop";
const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const IsDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <footer
      className={`my-10 relative ${IsDesktop ? "h-[800px]" : "h-[700px]"} `}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div
        className={`fixed  ${
          IsDesktop ? "h-[800px]" : "h-[700px]"
        }  bottom-0 flex flex-col justify-center items-center w-full`}
      >
        <FooterTop />
        <Separator className="my-6 w-full" />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
