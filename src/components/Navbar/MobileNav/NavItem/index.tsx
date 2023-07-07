import { formatLink } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "../../Dropdown";

type Props =
  | {
      text: string;
      withDropdown?: false;
      dropdownContent?: never;
    }
  | {
      text: string;
      withDropdown: true;
      dropdownContent: string[];
    };

const NavItem = ({ text, withDropdown, dropdownContent }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleClick = () => {
    if (withDropdown) {
      setOpenDropdown((prev) => !prev);
    }
  };
  return (
    <>
      <Link
        href={"/" + formatLink(text)}
        className="text-[30px] hover:opacity-80"
        onClick={handleClick}
      >
        {text}
      </Link>
      {(withDropdown || openDropdown) && (
        <Dropdown dropdownContent={dropdownContent as string[]} />
      )}
    </>
  );
};

export default NavItem;
