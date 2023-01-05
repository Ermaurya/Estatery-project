import React, { useContext } from "react";
import CountryCompo from "./CountryCompo";
import PropertyCompo from "./PropertyCompo";
import PriceRangeCompo from "./PriceRangeCompo";
import DateCompo from "./DateCompo";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="search">
      <CountryCompo />
      <DateCompo />
      <PriceRangeCompo />
      <PropertyCompo />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />&nbsp;&nbsp;<span>Search</span>
      </button>
    </div>
  );
};

export default Search;
