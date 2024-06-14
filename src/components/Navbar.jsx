import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./Additional/CartIcon";
import CartIconSmall from "./Additional/CartIconSmall";
import NavSearchForm from "./NavSearch/NavSearchForm";
import NavSearchFormSmall from "./NavSearch/NavSearchFormSmall";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const loc = useLocation()
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  useEffect(() => {
    setShowMenu(false)
  }, [loc])


  return (
    <nav className="navbar px-10 md:16 lg:px-24 xl:px-28 pt-5">
      <div className="navbar-large-devices hidden xl:block">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-28">
            <a
              className="logo font-extrabold text-5xl text-white mb-2"
              href="/"
            >
              .nextron
            </a>
            <NavSearchForm />
          </div>
          <div className="flex gap-5 font-semibold">
            <CartIcon />
            <button className="transition-all hover:ease-in hover:bg-slate-400 rounded-md text-black bg-white px-3 py-2">Log In</button>
            <button className="transition-all hover:ease-in hover:bg-slate-800 rounded-md text-white bg-black px-3 py-2">Sign Up</button>
          </div>
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
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>



      <div className="navbar-small-devices block lg:hidden xl:hidden">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="h-20 p-2" src="/nextron-logo.png" alt="" />
          </a>
          <div className="flex gap-4 items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <img className="h-10 w-10 transition-all hover:ease-in hover:scale-105" src="/menu.svg" alt="Menu" />
            </button>
            <CartIconSmall />
          </div>
        </div>
        {showMenu && (
          <ul className="text-center">
            <li className="pb-5 px-4 pt-4 hover:bg-slate-500">
              <NavSearchFormSmall />
            </li>
            <li className="pb-5 px-4 pt-4 hover:bg-slate-500">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-5 px-4 pt-4 hover:bg-slate-500">
              <Link to="/trending">Trending</Link>
            </li>
            <li className="pb-5 px-4 pt-4 hover:bg-slate-500">
              <Link to="/products">Products</Link>
            </li>
            <li className="pb-5 px-4 py-4 hover:bg-slate-500">
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
