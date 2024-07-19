import React from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishlist } from "../../../redux/wishlistTracker/wishlistReducer";
import slugify from 'slugify';
import PageTitle from '../../Additional/PageTitle';

function page() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteWishlist(id));
  };

  return (
    <>
      <div className='standard-responsive mt-10'>
      <h2 className="text-[60px] font-semibold mb-8 text-center">Your Wishlist</h2>
        {wishlistItems.length > 0 ?
          <table className="leading-normal m-auto">
            <thead className='text-center'>
              <tr>
                <th className="px-5 py-8 font-bold text-transparent">Images</th>
                <th className="px-5 py-8 font-bold">Product</th>
                <th className="px-5 py-8 font-bold">Price</th>
                <th className="px-5 py-8 font-bold"></th>
              </tr>
            </thead>
            <tbody className='text-left'>
              {wishlistItems.map((item) => (
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
                  <td className="px-5 py-8">
                    <button onClick={() => handleDelete(item.id)} className="text-slate-950 hover:text-slate-500">
                      <RiCloseLargeFill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          : <div className='pt-4 pl-6 w-1/2 text-center'>No items in wishlist</div>}
      </div>
    </>

  );
}

export default page;
