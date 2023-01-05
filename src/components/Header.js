import React from "react";

function Header() {
  return (
    <div className="header max-w-[1440px] mx-auto bg-white">
       <div className="left">
        <img alt="" className="logo" src="https://www.pngitem.com/pimgs/m/522-5229448_real-estate-logo-minimalist-logo-design-modern-real.png"/>
       </div> 
      <div className="right">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
