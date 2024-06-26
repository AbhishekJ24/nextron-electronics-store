import React, { useEffect } from "react";
import ItemInCart from "../../Additional/ItemInCart";
import { useSelector } from "react-redux";

function page() {
  const total_amt = useSelector(state => state.products.totalAmount);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-4/5 m-auto my-20">
        <h2 className="text-[60px] font-semibold">Cart</h2>
        <div className="flex gap-10 justify-center items-center">
          <div className="bg-slate-100 shadow-xl w-2/3 p-5">
            <ItemInCart />
          </div>
          <div className="bg-slate-100 w-1/3 m-auto shadow-xl py-10 px-5">
            <h2 className="mb-4 font-medium">Cart total</h2>
            <hr />
            <div className="mt-4 flex justify-between font-medium">
              <h2>Subtotal</h2>
              <h2 className="roboto tracking-wide">${Math.abs(total_amt.toFixed(2))}</h2>
            </div>
            <div className="mt-4 flex justify-between">
              <h2 className="font-medium">Shipping</h2>
              <div>
                <input type="radio" name="shipping" id="shipping" />
                <label className="ml-1" htmlFor="shipping">
                  Cash on Delivery
                </label>
              </div>
              <div>
                <input type="radio" name="shipping" id="shipping" />
                <label className="ml-1" htmlFor="shipping">
                  Credit Card
                </label>
              </div>
            </div>
            <div className="mt-4 mb-6 flex gap-5 font-medium">
              <h2>Total</h2>
              <h2 className="roboto tracking-wide">${Math.abs(total_amt.toFixed(2))}</h2>
            </div>
            <div>
              <button
                className="block rounded-lg m-auto w-4/5 p-4 bg-blue-800 mb-5 text-white hover:bg-blue-600 hover:ease-out transition-all"
                type="submit"
                disabled={total_amt <= 0}
              >
                PROCEED TO CHECKOUT
              </button>
              <button className="block rounded-lg m-auto w-4/5 p-4 bg-blue-100 hover:bg-blue-200 hover:ease-out transition-all" disabled={total_amt <= 0}>
                <img className="h-12 m-auto" src="/razorpay.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
