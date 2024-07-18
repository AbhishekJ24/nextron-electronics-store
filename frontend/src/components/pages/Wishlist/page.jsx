import React, { useEffect, useState } from "react";
import ItemInCart from "../../Additional/ItemInCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function page() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotal = () => {
    if (total_amt === 0)
      return 0
    if (paymentMethod === "online") {
      return total_amt.toFixed(2);
    } else if (paymentMethod === "cod") {
      return (total_amt + 15).toFixed(2);
    }
    return total_amt.toFixed(2);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      <div className="w-4/5 m-auto my-20">
        <h2 className="text-[60px] font-semibold mb-8">Cart</h2>
        <div className="flex gap-10 justify-center">
          <div className="bg-slate-100 shadow-xl w-2/3 p-5">
            <ItemInCart />
          </div>
          <div className="bg-slate-100 h-max w-2/5 mx-auto shadow-xl py-10 px-5">
            <h2 className="mb-4 font-medium">Cart total</h2>
            <hr />
            <div className="mt-4 flex justify-between font-medium">
              <h2>Subtotal</h2>
              <h2 className="roboto tracking-wide">${Math.abs(total_amt.toFixed(2))}</h2>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <h2 className="font-medium">Shipping</h2>
              <div>
                <input
                  type="radio"
                  name="shipping"
                  id="shippingOnline"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="ml-1" htmlFor="shippingOnline">
                  Pay Online
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="shipping"
                  id="shippingCOD"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="ml-1" htmlFor="shippingCOD">
                  Cash on Delivery (+$15)
                </label>
              </div>
            </div>
            <div className="mt-4 mb-6 flex gap-5 font-medium">
              <h2>Total</h2>
              <h2 className="roboto tracking-wide">${calculateTotal()}</h2>
            </div>
            <div className="font-medium">
              <button
                className="block rounded-lg m-auto w-4/5 p-4 mb-5 bg-blue-900 text-blue-50 hover:ease-out transition-all"
                type="submit"
                onClick={() => {
                  if (total_amt > 0) navigate("/checkout");
                }}
                disabled={total_amt <= 0}
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                className="block rounded-lg m-auto w-4/5 p-4 mb-5 bg-blue-300 text-blue-950 hover:bg-blue-200 hover:ease-out transition-all"
                onClick={() => {
                  navigate("/");
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
