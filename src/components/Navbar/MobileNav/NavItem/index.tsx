import { formatLink } from "@/utils";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import Dropdown from "../../Dropdown";

type Props =
  | {
      text: string;
      withDropdown?: boolean;
      dropdownContent?: never;
    }
  | {
      text: string;
      withDropdown: boolean;
      dropdownContent: string[];
    };

const NavItem = ({ text, withDropdown, dropdownContent }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (withDropdown) {
      setOpenDropdown((prev) => !prev);
    }
  };
  return (
    <>
      <Link
        href={"/" + formatLink(text)}
        className={`text-[30px] hover:opacity-80 flex items-center justify-center gap-1 ${openDropdown ? 'opacity-50':""}`}
        onClick={handleClick}
      >
        <span>{text}</span>
        {withDropdown &&(
        <span >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_21_219"
            /*     style="mask-type:alpha" */
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
        )
        }
      </Link>
      {(withDropdown && openDropdown) && (
        <Dropdown dropdownContent={dropdownContent as string[]} />
      )}
    </>
  );
};

export default NavItem;
