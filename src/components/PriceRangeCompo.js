import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeCompo = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isClick, setIsClick] = useState(false);
  console.log(price)
  const prices = [
    {
      value: "3100 - 5000",
    },
    {
      value: "5000 - 20000",
    },
    {
      value: "21000 - 30000",
    },
    {
      value: "30000 - 40000",
    }
    
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsClick(!isClick)}
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Select Price</div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
        </div>
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeCompo;
