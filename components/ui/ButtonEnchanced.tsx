"use client";
import { useCursor } from "@/app/CursorContext";

type ButtonProps = {
  prevTitle: string;
  size?: "large" | "small"; // Prop pro velikost
};

const ButtonEnhanced = ({ prevTitle, size = "large" }: ButtonProps) => {
  const sizeClasses =
    size === "large" ? "p-4 px-12 text-lg" : "p-2 px-6 text-sm";
  const { setCursorHidden } = useCursor();
  return (
    <div
      onMouseEnter={() => setCursorHidden(true)}
      onMouseLeave={() => setCursorHidden(false)}
      className={`relative flex justify-center items-center w-max cursor-none rounded-full bg-black transition-all duration-500 ease-in-out select-none hover:bg-white  text-white overflow-hidden group ${sizeClasses}`}
      role="button"
      tabIndex={0}
      aria-label="Button"
    >
      <span className="group-hover:translate-y-[120%] transition-all duration-300 ease-in-out">
        {prevTitle}
      </span>
      <div className="absolute translate-y-[-100%] rounded-tl-none scale-0 origin-top group-hover:scale-100 rounded-tr-none group-hover:rounded-tl-full group-hover:rounded-tr-full  group-hover:translate-y-0 w-[100%]   border-none outline-none h-full text-center rounded-full bg-white pointer-events-none select-non group-active:bg-black/20 group-active:scale-90 text-black  z-10 transition-all duration-300 ease-in-out flex justify-center items-center">
        <span>Click me</span>
      </div>
    </div>
  );
};

export default ButtonEnhanced;
