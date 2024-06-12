import React from "react";
import UserCard from "./Additional/UserCard";
import CartIcon from "./Additional/CartIcon";

function Navbar({ itemCount }) {
  return (
    <nav className="navbar flex justify-between items-center px-28 min-h-24 mb-12">
      <div>
        <img className="h-24" src="src/assets/nextron-logo-text.png" alt="" />
      </div>
      <ul className="flex gap-12 items-center">
        <li>Home</li>
        <li>Trending</li>
        <li>Products</li>
        <li>About Us</li>
        <li className="flex gap-4 items-center">
          <UserCard
            user_name="AbhishekJ24"
            avatar_card="src/assets/avatar2.png"
          />
          <CartIcon itemCount="5" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
