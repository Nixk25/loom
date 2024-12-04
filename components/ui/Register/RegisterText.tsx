import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";
const RegisterText = () => {
  const { setCursorBig } = useCursor();
  return (
    <motion.h1
      key="register"
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{ duration: 1, delay: 1 }}
      onMouseEnter={() => setCursorBig(true)}
      onMouseLeave={() => setCursorBig(false)}
      className="registerHeadline uppercase leading-[50px] xl:leading-[100px] absolute "
    >
      Click to register
    </motion.h1>
  );
};

export default RegisterText;
