import Link from "next/link";
import React, { useState, MouseEvent } from "react";
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
  const handleHover = () => {
    if (isBtn) return;
    if (withDropdown) {
      setOpenDropdown((prevState) => !prevState);
      return;
    }
    setIsHovering((prevState) => !prevState);
  };
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (withDropdown) {
      e.preventDefault();
    }
  };
  return (
    <li>
      {/* Style based on hover */}
      {isBtn ? (
        <a href={formatLink(text)} className="primary-btn">
          {text}
        </a>
      ) : (
        <Link
          href={"/" + formatLink(text)}
          className={`relative mb-1 
           flex items-center gap-1 ${openDropdown ? "opacity-50" : ""}
        `}
          onClick={handleClick}
          onMouseOver={handleHover}
          // if it is with dropdown i want when you hover out of the dropdown itself that you close it.
          onMouseLeave={withDropdown ? undefined : handleHover}
        >
          <span>{text}</span>
          {withDropdown && (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_21_219"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_21_219)">
                  <path
                    d="M12 15.375L6 9.37501L7.4 7.97501L12 12.575L16.6 7.97501L18 9.37501L12 15.375Z"
                    fill="#373737"
                  />
                </g>
              </svg>
            </span>
          )}
        </Link>
      )}
      {/* line */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            key={text}
            exit={{ width: "0", opacity: 0 }}
            initial={{ width: "0", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            className="h-[2px] w-full bg-primary"
          ></motion.div>
        )}
      </AnimatePresence>
      {/* dropdown */}
      {withDropdown && openDropdown && (
        <Dropdown
          handleMouseOut={handleHover}
          dropdownContent={dropdownContent as string[]}
        />
      )}
    </li>
  );
};

export default NavItem;
