import React, { useState } from "react";
import { Link } from "react-router-dom";

function Button() {
  const [toggle, setToggle] = useState("block");
  const fav = () => {
    setToggle("none");
  };
  return (
    <div className="fav" style={{ display: toggle }}>
      <Link to="/property/2" onClick={() => fav()}>
        ❤️
      </Link>
    </div>
  );
}

export default Button;
