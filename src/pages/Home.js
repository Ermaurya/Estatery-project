import React from "react";
import HouseList from "../components/HouseList";
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="min-h-[1800px] home">
      {/* <Button /> */}
      <Search/>
      <HouseList />
    </div>
  );
};

export default Home;
