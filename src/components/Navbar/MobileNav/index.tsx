import React from "react";
import data from "@/data/data.json";
import NavItem from "./NavItem";
import { Variants, motion } from "framer-motion";
type Props = {};

const MobileNav = (props: Props) => {
  const { navbar } = data;
  const ulVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.55,
        duration: 0.3,
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const divVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
    exit: {
      y: 40,
      opacity: 0,
    },
  };
  return (
    <motion.ul
      key="mobileNav"
      variants={ulVariants}
      initial={"hidden"}
      exit={"exit"}
      animate={"visible"}
      className="z-[50] bg-gray-100 text-gray-900 gap-8 right-0 left-0 w-full fixed lg:hidden  top-24 h-[calc(100vh-96px)] flex flex-col  items-center justify-center text-xl"
    >
      {navbar.text.map((item, index) => {
        if (item === "Get Started") {
          return null;
        }
        return (
          <li key={index} className={"relative "}>
            <motion.div variants={divVariants}>
              <NavItem
                text={item}
                withDropdown={item === "Courses"}
                dropdownContent={
                  item === "Courses" ? navbar["Courses"] : undefined
                }
              />
            </motion.div>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default MobileNav;