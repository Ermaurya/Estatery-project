import React from "react";
import Button from './Fav'
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    imageLg,
    type,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={imageLg} alt="" />
      <div className="text-lg font-semibold text-violet-600 mb-1">
        ${price}
      </div>
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="text-lg font-semibold px-19">{type}</div>
        <Button/>
      </div>
      <div className="text-lg text-gray-600 font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{`${bedrooms}Beds`}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{`${bathrooms} Bath..`}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
