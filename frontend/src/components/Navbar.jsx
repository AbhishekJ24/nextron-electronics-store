import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./Additional/CartIcon";
import NavSearchForm from "./NavSearch/NavSearchForm";
import NavSearchFormSmall from "./NavSearch/NavSearchFormSmall";
import MyAlertButton from "./Additional/MyAlertButton";
import { SlArrowDown } from "react-icons/sl";
import { useSelector } from "react-redux";
import ItemInHoverCart from "./Additional/ItemInHoverCart";

function Navbar() {
  const products = useSelector((state) => state.products.products);

  const [idx, setIdx] = useState(0)
  const [showHoverCart, setShowHoverCart] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [loginButton, setLoginButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuIcon, setMenuIcon] = useState("/menu-closed.svg");
  const [showSearch, setShowSearch] = useState(false);
  const [users, setUsers] = useState([])

  const loc = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors'
      });
      const jresponse = await response.json();
      setUsers(jresponse);
    };

    fetchUsers();
  }, []);

  const toggleMenu = () => {
    setShowSearch(false);
    setShowMenu((prev) => !prev);
    setMenuIcon(showMenu ? "/menu-closed.svg" : "/menu-opened.svg");
  };

  const loginSimulate = () => {
    setLoginButton(true);
    setLoginAlert(true);
  };

  const handleSearchMobile = () => {
    setShowMenu(false);
    setMenuIcon("/menu-closed.svg");
    setShowSearch((prev) => !prev);
  };

  const handleCartHoverIn = () => {
    setShowHoverCart(true);
  };

  const handleCartHoverOut = () => {
    setShowHoverCart(false);
  };

  useEffect(() => {
    if (loginButton) {
      const timer = setTimeout(() => {
        setLoginAlert(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loginButton]);

  useEffect(() => {
    setShowMenu(false);
    setShowSearch(false);
    setShowHoverCart(false);
    setMenuIcon("/menu-closed.svg");
  }, [loc]);

  return (
    <nav className="navbar standard-responsive pt-5 pb-3 lg:pb-0 sticky top-0 z-50 w-full">
      <div className="navbar-large-devices hidden xl:block">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-28">
            <a
              className="logo raleway font-extrabold text-6xl text-white mb-2"
              href="/"
            >
              .nextron
            </a>
            <NavSearchForm />
          </div>
          <div className="flex items-center gap-5 font-semibold">
            <div
              className="relative"
              onMouseEnter={handleCartHoverIn}
              onMouseLeave={handleCartHoverOut}
            >
              <CartIcon />
              {showHoverCart && (
                <div
                  className="absolute top-11 right-0 max-h-[30rem] overflow-y-scroll overflow-x-clip w-[27rem] text-slate-200 bg-slate-800 opacity-95 rounded-xl p-5"
                  onMouseEnter={handleCartHoverIn}
                  onMouseLeave={handleCartHoverOut}
                >
                  <div className="flex flex-col gap-10 justify-center items-center cursor-default">
                    {products.length > 0 ? (
                      products.map((item) => (
                        <ItemInHoverCart
                          key={item.id}
                          idd={item.id}
                          img_url={item.img_url}
                          name={item.name}
                          price={item.price}
                          quantity={item.quantity}
                        />
                      ))
                    ) : (
                      <div>No items in cart</div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {!loginButton ? (
              <>
                <button
                  onClick={loginSimulate}
                  className="transition-all hover:ease-in hover:bg-slate-400 rounded-md text-black bg-white px-3 py-2"
                >
                  Log In
                </button>
                <button
                  onClick={loginSimulate}
                  className="transition-all hover:ease-in hover:bg-slate-800 rounded-md text-white bg-black px-3 py-2"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Logged in as{" "}
                <div>
                  <span className="flex gap-3 justify-between items-center text-sm tracking-wide w-48 font-bold text-cyan-900 searchQueryButton px-4 py-2 rounded-lg">
                    {users[idx].username}
                    <button onClick={() => {
                      setIdx(((idx + 1) % users.length))
                    }
                    }><SlArrowDown /></button>
                  </span>
                </div>
              </>
            )}
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

      <div className="navbar-small-devices block xl:hidden">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="h-20 p-2" src="/nextron-logo.png" alt="Nextron Logo" />
          </a>
          <div className="flex gap-2 items-center">
            <button onClick={handleSearchMobile}>
              <img
                className="h-8 w-8 transition-all hover:ease-in hover:scale-105 invert"
                src="/search.svg"
                alt="Search"
              />
            </button>
            <button onClick={toggleMenu} className="focus:outline-none">
              <img
                className="h-12 w-12 transition-all hover:ease-in hover:scale-105 invert"
                src={menuIcon}
                alt="Menu"
              />
            </button>
          </div>
        </div>
        {showMenu && (
          <ul className="text-center text-sm">
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
            <li className="pb-5 px-4 py-4 hover:bg-slate-500">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        )}
        {showSearch && <NavSearchFormSmall />}
      </div>

      {loginAlert && <MyAlertButton text="You have been logged in successfully" />}
    </nav>
  );
}

export default Navbar;