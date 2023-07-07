import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../../Dropdown";
import { formatLink } from "@/utils";
type Props =
  | {
      text: string;
      isBtn: boolean;
      withDropdown?: false;
      dropdownContent?: never;
    }
  | {
      text: string;
      isBtn: boolean;
      withDropdown: true;
      dropdownContent: string[];
    };

const NavItem = ({ text, isBtn, withDropdown, dropdownContent }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleHover= ()=>{
    if(isBtn) return;
    if(withDropdown){
        setOpenDropdown(prevState=> !prevState);
        return;
    }
    setIsHovering(prevState=> !prevState)
  }
  return (
    <li>
      {/* Style based on hover */}
      <Link
        href={"/" + formatLink(text)}
        className={`relative mb-1 ${isBtn ? "primary-btn" : ""}`}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
      >
        {text}
      </Link>
      {/* line */}
      {isHovering && (
        <AnimatePresence>
          <motion.div
            key={text}
            exit={{ width: "0", opacity: 0 }}
            initial={{ width: "0", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            className="h-[2px] w-full bg-primary"
          ></motion.div>
        </AnimatePresence>
      )}
      {/* dropdown */}
      {withDropdown && (
       <Dropdown dropdownContent={dropdownContent}/>
      )}
    </li>
  );
};

export default NavItem;
