import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems, addItemsByNumber } from "../../redux/itemsTracker/cartItemsReducer";
import { addProduct } from "../../redux/itemsTracker/productsSlice";
import { addWishlist, deleteWishlist } from "../../redux/wishlistTracker/wishlistReducer";
import MyAlertButton from "./MyAlertButton";
import slugify from "slugify";
import Loader from "../Additional/Loader";

function ProductCard({ prodId, img_url, img_alt_text, product_name, product_price, show = true, bg_color = "bg-slate-200" }) {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertFavorite, setShowAlertFavorite] = useState(false);
  const [it, setIt] = useState(1);
  const [removeDisable, setRemoveDisabled] = useState(false);
  const [addDisable, setAddDisabled] = useState(false);
  const [favBtnSrc, setFavBtnSrc] = useState("favorite-false.png");
  const [cartDelayWhite, setCartDelayWhite] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setRemoveDisabled(it === 1);
    setAddDisabled(it === 10);
  }, [it]);

  const handleAddToCart = () => {
    setCartDelayWhite(true);

    setTimeout(() => {
      setCartDelayWhite(false);
    }, 1500);

    setTimeout(() => {
      setShowAlert(true);
    }, 1800);

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    dispatch(it === 1 ? addItems() : addItemsByNumber(it));
    const newProduct = {
      id: prodId,
      name: product_name,
      price: product_price,
      quantity: it,
      img_url: img_url,
    };
    dispatch(addProduct(newProduct));
  };

  const addToWishlist = () => {
    const product = {
      id: prodId,
      name: product_name,
      price: product_price,
      img_url: img_url,
    };
    dispatch(addWishlist(product));
  };

  const removeFromWishlist = () => {
    dispatch(deleteWishlist(prodId));
  };

  const handleFavoriteButtonAlert = () => {
    if (favBtnSrc === "favorite-false.png") {
      setFavBtnSrc("favorite-true.png");
      addToWishlist();
    } else {
      setFavBtnSrc("favorite-false.png");
      removeFromWishlist();
    }
    setCartDelayWhite(true);
    setTimeout(() => {
      setCartDelayWhite(false);
    }, 500);
    setTimeout(() => {
      setShowAlertFavorite(true);
    }, 700);
    setTimeout(() => {
      setShowAlertFavorite(false);
    }, 2500);
  };

  return (
    <>
      {cartDelayWhite && (
        <>
          <Loader />
          <div className="bg-white opacity-75 w-full h-full fixed top-0 left-0 z-40"></div>
        </>
      )}
      <div className={`${bg_color} hover:bg-slate-200 relative rounded-2xl m-auto px-2 shadow-xl product-card text-xs flex flex-col justify-evenly`}>
        <div>
          <div className="h-44 flex items-center justify-center">
            <img
              src={img_url}
              alt={img_alt_text}
              className="h-40 w-40 object-contain mix-blend-multiply hover:ease-in hover:scale-105 transition-all"
            />
          </div>
          <div className="m-2 text-sm text-center">
            <Link className="transition-all ease-in hover:underline" to={`/${slugify(product_name, { lower: true })}/${prodId}`}>
              {product_name}
            </Link>
          </div>
          <div className="font-semibold text-base text-center">
            ${product_price}
          </div>
        </div>
        <button id="fav" onClick={handleFavoriteButtonAlert} className="absolute top-8 right-8">
          <img src={favBtnSrc} className="h-8 transition-all hover:ease-in" />
        </button>
        {show && (
          <div>
            <div className="flex justify-center gap-5 mb-4">
              <button className="border-none bg-slate-500 hover:bg-slate-400 flex justify-center items-center px-4 py-2 rounded-xl font-semibold text-slate-50 w-24">
                BUY NOW
              </button>
              <button
                onClick={handleAddToCart}
                className="border-none bg-slate-500 hover:bg-slate-400 flex justify-center items-center px-2 py-1 rounded-xl font-semibold text-slate-50 w-24"
              >
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button
                disabled={removeDisable}
                onClick={() => setIt(it - 1)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <span className="mx-2">{it}</span>
              <button
                disabled={addDisable}
                onClick={() => setIt(it + 1)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>
        )}
        {showAlert && <MyAlertButton text="Items added to cart successfully" />}
        {showAlertFavorite && <MyAlertButton text="Item added to wishlist successfully" />}
      </div>
    </>
  );
}

export default ProductCard;
