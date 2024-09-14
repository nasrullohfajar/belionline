import React from "react";
import Cart from "../assets/cart.png";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between px-36 shadow">
      <h1 className="text-3xl">BeliOnline</h1>
      <div className="flex items-center justify-center gap-5">
        <a href="">
          <img src={Cart} alt="cart icon" className="h-6" />
        </a>

        <p className="text-lg">John Doe</p>
      </div>
    </div>
  );
};

export default Header;
