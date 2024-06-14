import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./Additional/CartIcon";
import CartIconSmall from "./Additional/CartIconSmall";
import NavSearchForm from "./NavSearch/NavSearchForm";
import NavSearchFormSmall from "./NavSearch/NavSearchFormSmall";
import MyAlertButton from "./Additional/MyAlertButton";

function Navbar() {

  const [loginAlert, setLoginAlert] = useState(false)
  const [loginButton, setLoginButton] = useState(false)

  const [showMenu, setShowMenu] = useState(false);

  const loc = useLocation()

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function loginSimulate() {
    setLoginButton(true);
    setLoginAlert(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoginAlert(false)
    }, 4000);
  }, [loginButton])

  useEffect(() => {
    setShowMenu(false)
  }, [loc])


  return (
    <nav className="navbar standard-responsive pt-5">
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
          <div className="flex items-center gap-5 font-semibold">
            <CartIcon />
            {!loginButton && <>
              <button onClick={loginSimulate} className="transition-all hover:ease-in hover:bg-slate-400 rounded-md text-black bg-white px-3 py-2">Log In</button>
              <button onClick={loginSimulate} className="transition-all hover:ease-in hover:bg-slate-800 rounded-md text-white bg-black px-3 py-2">Sign Up</button>
            </>
            }
            {loginButton && <div>
              Logged in as <span className="font-bold text-cyan-900 searchQueryButton p-2 rounded-lg mx-2">Abhishek Joshi</span>
            </div>
            }
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
            <li className="pb-5 px-4 pt-4">
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

      {loginAlert && <MyAlertButton text="You have been logged in successfully"/>}
    </nav>
  );
}

export default Navbar;
