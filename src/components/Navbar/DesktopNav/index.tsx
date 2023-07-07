import React from "react";
import data from "@/data/data.json";
import NavItem from "./NavItem";

type Props = {};

const DesktopNav = (props: Props) => {
  const { navbar } = data;
  return (
    <ul className="hidden lg:flex gap-8 text-gray-900 text-lg  font-medium
     items-center">
      {navbar.text.map((item, index) => {
        let flag = item === "Courses";
          return (
            <NavItem
              key={index}
              text={item}
              isBtn={item === 'Get Started'}
              withDropdown={flag}
              dropdownContent={flag ? navbar["Courses"] : undefined}
            />
          )
        }
       
      )}
    </ul>
  );
};

export default DesktopNav;
