import React, { useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/itemsTracker/productsSlice';

function ItemInCart() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className='py-4'>
      {products.length > 0 ?
        <table className="min-w-full leading-normal">
          <thead className='text-center'>
            <tr>
              <th className="px-5 py-8 font-bold text-transparent">Images</th>
              <th className="px-5 py-8 font-bold">Product</th>
              <th className="px-5 py-8 font-bold">Price</th>
              <th className="px-5 py-8 font-bold">Quantity</th>
              <th className="px-5 py-8 font-bold">Subtotal</th>
              <th className="px-5 py-8 font-bold"></th>
            </tr>
          </thead>
          <tbody className='text-left'>
            {products.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-8">
                  <img src={item.img_url} alt={item.name} className="h-28 w-28 object-cover" />
                </td>
                <td className="px-5 py-8">{item.name}</td>
                <td className="px-5 py-8">${item.price}</td>
                <td className="px-5 py-8">{item.quantity}</td>
                <td className="px-5 py-8">${item.quantity * item.price}</td>
                <td className="px-5 py-8">
                  <button onClick={() => handleDelete(item.id)} className="text-slate-950 hover:text-slate-500">
                    <RiCloseLargeFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        : <div className='py-5 px-10'>No items in cart</div>}
    </div>

  );
}

export default ItemInCart;
