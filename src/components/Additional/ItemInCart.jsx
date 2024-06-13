import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ItemInCart() {
  const products = useSelector((state) => state.inCartItems.value);
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
        {products.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.img_url} alt="not-found" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ItemInCart;
