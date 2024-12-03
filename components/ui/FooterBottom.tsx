import React from "react";
import { FOOTERLINKS } from "@/app/constants";
import { SOCIALS } from "@/app/constants";
const FooterBottom = () => {
  return (
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
  );
};

export default FooterBottom;
