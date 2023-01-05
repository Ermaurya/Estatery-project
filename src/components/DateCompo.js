import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const DateCompo = () => {
  const { date, setdate } = useContext(HouseContext);
  const [isClick, setIsClick] = useState(false);
  const dates = [
    {
      value: "2015 - 2016",
    },
    {
      value: "2016 - 2017",
    },
    {
      value: "2017 - 2018",
    },
    {
      value: "2019 - 2020",
    },
    {
      value: "2020 - 2021",
    },
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsClick(!isClick)}
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Choose Date</div>
          <div className="text-[15px] font-medium leading-tight">{date}</div>
        </div>
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {dates.map((date, index) => {
          return (
            <Menu.Item
              onClick={() => setdate(date.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {date.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DateCompo;