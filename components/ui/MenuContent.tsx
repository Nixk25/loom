import React from "react";
import { FOOTERLINKS, NAVITEMS, SOCIALS } from "@/app/constants";
import { motion } from "framer-motion";
import { useCursor } from "@/app/CursorContext";

type MenuContentProps = {
  toggleMenu: () => void;
};

const MenuContent = ({ toggleMenu }: MenuContentProps) => {
  const { setCursorBig } = useCursor();

  const menuVariants = {
    initial: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const listVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const navLinkVariants = {
    initial: {
      y: "-30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const allSocialVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
    exit: {
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const socialVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const footerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const footerLinksVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0  w-full h-full  z-[9999] bg-neutral-900  flex flex-col items-end justify-center overflow-y-auto pt-[120px]"
    >
      <motion.ul
        variants={listVariants}
        initial="initial"
        animate="visible"
        exit="initial"
        className="space-y-4 text-end  font-bold  leading-[100px] sm:leading-[220px]
         text-white  pb-20"
      >
        {NAVITEMS.map((item, i) => (
          <div key={i} className="overflow-hidden">
            <motion.li
              className=" navLink  relative group"
              variants={navLinkVariants}
              onMouseEnter={() => setCursorBig(true)}
              onMouseLeave={() => setCursorBig(false)}
            >
              <a href={item.href} onClick={toggleMenu}>
                {item.label}
              </a>

              <div className="absolute group-hover:w-full -bottom-2 left-0 w-[0px] transition-all duration-1000 h-3 bg-white"></div>
            </motion.li>
          </div>
        ))}
      </motion.ul>

      <div className="sm:absolute relative sm:left-0 px-2 flex-col sm:flex-row  sm:bottom-0 flex justify-between gap-5 items-end w-full  ">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={footerVariants}
          className="text-sm text-start text-gray-500 mt-8 flex w-full flex-col "
        >
          <p>
            For support, reach us at:{" "}
            <a
              href="mailto:support@loomapp.com"
              className="text-white underline"
            >
              support@loomapp.com
            </a>
          </p>
          <p>
            Or call us at: <span className="text-white">+1 (555) 987-6543</span>
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={footerLinksVariants}
          className="flex gap-4 flex-col sm:flex-row w-full flex-wrap items-end justify-center  text-white  "
        >
          {FOOTERLINKS.map(({ name, isUnderlined }, i) =>
            isUnderlined ? (
              <a key={i} className={` ${isUnderlined ? "underline" : ""}`}>
                {name}
              </a>
            ) : (
              <span key={i}>{name}</span>
            )
          )}
        </motion.div>
      </div>
      <motion.div
        className="flex flex-row sm:flex-col gap-4 items-center absolute left-2 bottom-0  sm:bottom-1/2 sm:translate-y-1/2"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={allSocialVariants}
      >
        {SOCIALS.map(({ icon: Icon }, i) => (
          <motion.a
            key={i}
            variants={socialVariants}
            className=" text-white active:scale-90"
            rel="noreferrer"
          >
            <Icon className="size-6" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MenuContent;
