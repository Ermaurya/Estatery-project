import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
const CountryCompo = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isClick, setIsClick] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsClick(!isClick)}
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Select Location</div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
        </div>
       
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {countries.map((country, idx) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={idx}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryCompo;
