import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ItemInCart() {
  const products = useSelector((state) => state.inCartItems.items);
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.img_url} alt="not-found" />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.price}</td>
          </tr>
        ))}
        {products.length === 0 && (
          <tr>
            <td colSpan="5" className="text-slate-900">
              No products in cart
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ItemInCart;
