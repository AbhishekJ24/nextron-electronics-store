import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { itemCountReducer } from '../../redux/itemsTracker/cartItemsReducer';
import { deleteProduct } from '../../redux/itemsTracker/productsSlice';
import slugify from 'slugify';

function ItemInCart() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id, quantity) => {
    dispatch(deleteProduct(id));
    dispatch(itemCountReducer(quantity))
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
                  <div className='bg-white flex items-center justify-center drop-shadow-xl p-2 rounded-lg opacity-90'>
                    <img src={item.img_url} alt={item.name} className="h-28 w-28 object-contain mix-blend-multiply" />
                  </div>
                </td>
                <td className="px-5 py-8">
                  <Link className="transition-all hover:ease-linear hover:underline font-medium" to={`/${slugify(item.name, { lower: true })}/${item.id}`}>
                    {item.name}
                  </Link>
                </td>
                <td className="px-5 py-8">${item.price}</td>
                <td className="px-5 py-8">{item.quantity}</td>
                <td className="px-5 py-8">${item.quantity * item.price}</td>
                <td className="px-5 py-8">
                  <button onClick={() => handleDelete(item.id, item.quantity)} className="text-slate-950 hover:text-slate-500">
                    <RiCloseLargeFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        : <div className='pt-4 pl-6'>No items in cart</div>}
    </div>

  );
}

export default ItemInCart;
