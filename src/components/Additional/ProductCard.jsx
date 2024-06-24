import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/itemsTracker/cartItemsReducer";
import { addItemsByNumber } from "../../redux/itemsTracker/cartItemsReducer";
import { addProduct } from "../../redux/itemsTracker/productsSlice";
import MyAlertButton from "./MyAlertButton";
import { v4 as uuidv4 } from 'uuid';

function ProductCard({ img_url, img_alt_text, product_name, product_price }) {
  const [showAlert, setShowAlert] = useState(false);
  const [it, setIt] = useState(1);
  const [removeDisable, setRemoveDisabled] = useState(false);
  const [addDisable, setAddDisabled] = useState(false);

  useEffect(() => {
    setRemoveDisabled(it === 1);
    setAddDisabled(it === 10);
  }, [it]);

  const handleAddToCart = () => {
    const sure = confirm(`Do you want to add ${product_name} to your cart?`);
    if (sure) {
      dispatch(it === 1 ? addItems() : addItemsByNumber(it));
      const newProduct = {
        id: uuidv4(),
        name: product_name,
        price: product_price,
        quantity: it,
        img_url: img_url,
      };
      dispatch(addProduct(newProduct));
      setShowAlert(true);
    }
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  const dispatch = useDispatch();
  return (
    <div className="bg-slate-200 rounded-2xl m-auto px-2 shadow-xl product-card text-xs flex flex-col justify-around">
      <div>
        <div className="h-48 flex items-center justify-center">
          <img
            src={img_url}
            alt={img_alt_text}
            className="h-40 w-40 object-contain mix-blend-multiply hover:ease-in hover:scale-105 transition-all"
          />
        </div>
        <div className="m-2 text-base text-center">{product_name}</div>
        <div className="font-semibold text-lg text-center">
          ${product_price}
        </div>
      </div>
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
      {showAlert && (
        <MyAlertButton text="Items added to cart successfully" />
      )}
    </div>
  );
}

export default ProductCard;
