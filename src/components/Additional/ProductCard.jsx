import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/itemsTracker/cartItemsReducer";
import { addItemsByNumber } from "../redux/itemsTracker/cartItemsReducer";

function ProductCard({ img_url, img_alt_text, product_name, product_price }) {
  const [it, setIt] = useState(1);
  const [removeDisable, setRemoveDisabled] = useState(false);
  const [addDisable, setAddDisabled] = useState(false);

  useEffect(() => {
    if (it == 1) setRemoveDisabled(true);
    else setRemoveDisabled(false);
    if (it == 10) setAddDisabled(true);
    else setAddDisabled(false);
  }, [it]);

  const dispatch = useDispatch();
  return (
    <div className="bg-slate-100 rounded-2xl px-4 pt-4 pb-5 m-auto shadow-xl product-card">
      <div className="h-40 flex items-center justify-center">
        <img
          src={img_url}
          alt={img_alt_text}
          className="h-full object-contain"
        />
      </div>
      <div className="my-4 text-xl text-center">{product_name}</div>
      <div className="font-semibold my-4 text-xl text-center">
        Rs. {product_price}
      </div>

      <div className="flex justify-between items-center gap-2">
        <button className="border-none bg-slate-500 hover:bg-slate-400 flex justify-center items-center px-4 py-2 rounded-xl font-semibold text-slate-50 w-24">
          BUY NOW
        </button>
        <button
          onClick={() => {
            const sure = confirm(
              "Do you want to add " + product_name + " to your cart?"
            );
            if (sure) {
              if (it == 1) dispatch(addItems());
              else dispatch(addItemsByNumber(it));
            }
          }}
          className="border-none bg-slate-500 hover:bg-slate-400 flex justify-center items-center px-2 py-1 rounded-xl font-semibold text-slate-50 w-24"
        >
          ADD TO CART
        </button>
        <div className="flex items-center">
          <button
            disabled={removeDisable}
            onClick={() => {
              setIt(it - 1);
            }}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="mx-2">{it}</span>
          <button
            disabled={addDisable}
            onClick={() => {
              setIt(it + 1);
            }}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
