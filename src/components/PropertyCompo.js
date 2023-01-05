import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
const PropertyCompo = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Select place</div>
          <div className="text-[15px] font-medium leading-tight">{property} </div>
        </div>
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyCompo;
