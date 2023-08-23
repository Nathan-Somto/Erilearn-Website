import { formatLink } from "@/utils";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import Dropdown from "../../Dropdown";

type Props =
  | {
      text: string;
      withDropdown?: boolean;
      dropdownContent?: never;
      closeNav: () => void
    }
  | {
      text: string;
      withDropdown: boolean;
      dropdownContent: string[];
      closeNav: () => void
    };

const NavItem = ({ text, withDropdown, dropdownContent, closeNav }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (withDropdown) {
      e.preventDefault();
      setOpenDropdown((prev) => !prev);
    }
    else{
      closeNav()
    }
  };
  return (
    <>
      <Link
        href={"/" + formatLink(text)}
        className={`text-[22px]  flex px-[5%] ${!(withDropdown && openDropdown)? 'border-b':''}  pb-7 border-solid border-b-[#EF4D48] hover:opacity-50 gap-1 ${openDropdown ? 'opacity-50':""}`}
        onClick={handleClick}
      >
        <span>{text}</span>
        {withDropdown &&(
        <span  className="self-center" >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
                <rect width="18" height="18" fill="#EF4D48" />
              </mask>
              <g mask="url(#mask0_21_219)">
                <path
                  d="M12 15.375L6 9.37501L7.4 7.97501L12 12.575L16.6 7.97501L18 9.37501L12 15.375Z"
                  fill="#EF4D48"
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
