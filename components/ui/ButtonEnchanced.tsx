"use client";
import { useCursor } from "@/app/CursorContext";

type ButtonProps = {
  prevTitle: string;
  size?: "large" | "small";
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "secondary";
};

const ButtonEnhanced = ({
  prevTitle,
  size = "large",
  type,
  variant = "primary",
}: ButtonProps) => {
  const sizeClasses =
    size === "large" ? "p-4 px-12 text-lg" : "p-2 px-6 text-sm";
  const { setCursorHidden } = useCursor();
  return (
    <button
      type={type}
      onMouseEnter={() => setCursorHidden(true)}
      onMouseLeave={() => setCursorHidden(false)}
      className={`relative flex justify-center items-center w-max cursor-none rounded-full  transition-all duration-500 ease-in-out select-none hover:bg-white  overflow-hidden group ${sizeClasses} ${
        variant === "outline"
          ? "bg-transparent text-black"
          : "bg-black text-white"
      }`}
      role="button"
      tabIndex={0}
      aria-label="Button"
    >
      <span className="group-hover:translate-y-[120%] transition-all duration-300 ease-in-out">
        {prevTitle}
      </span>
      <div className="absolute translate-y-[-100%] rounded-tl-none scale-0 origin-top group-hover:scale-100 rounded-tr-none group-hover:rounded-tl-full group-hover:rounded-tr-full  group-hover:translate-y-0 w-[100%]   border-none outline-none h-full text-center rounded-full bg-white pointer-events-none select-non group-active:bg-black/20 group-active:scale-90 text-black  z-1 transition-all duration-300 ease-in-out flex justify-center items-center">
        <span>Click me</span>
      </div>
    </button>
  );
};

export default ButtonEnhanced;
