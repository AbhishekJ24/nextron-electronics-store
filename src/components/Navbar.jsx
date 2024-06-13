import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./Additional/UserCard";
import CartIcon from "./Additional/CartIcon";

function Navbar() {
  return (
    <nav className="navbar px-24 pt-5">
      <div className="flex justify-between items-center">
        <a className="logo font-extrabold text-5xl text-white mb-2" href="/">
          .nextron
          {/* <img src="/nextron-logo-text.png" alt="" /> */}
        </a>
        <li className="flex gap-8 items-center">
          <UserCard user_name="AbhishekJ24" avatar_card="/avatar2.png" />
          <CartIcon />
        </li>
      </div>
      <ul className="flex gap-12 items-center">
        <li className="hover:bg-slate-600 pb-5 px-4 pt-4">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-slate-600 pb-5 px-4 pt-4">
          <Link to="/trending">Trending</Link>
        </li>
        <li className="hover:bg-slate-600 pb-5 px-4 pt-4">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:bg-slate-600 pb-5 px-4 py-4">
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
