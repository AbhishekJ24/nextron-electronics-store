import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { itemCountReducer } from "../../redux/itemsTracker/cartItemsReducer";
import { deleteProduct } from "../../redux/itemsTracker/productsSlice";

function ItemInHoverCart({ idd, img_url, name, price, quantity }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(idd));
        dispatch(itemCountReducer(quantity));
    };

    return (
        <div className='min-h-28 w-full flex gap-5'>
            <div className='bg-white opacity-90 drop-shadow-xl rounded-lg p-2 w-1/4 flex items-center justify-center'>
                <img src={img_url} alt={name} className="h-20 w-20 object-contain mix-blend-multiply" />
            </div>
            <div className="w-3/4 flex flex-col gap-2 justify-center font-semibold">
                <Link className="transition-all hover:ease-linear hover:underline text-left" to={`/${slugify(name, { lower: true })}/${idd}`}>
                    {name}
                </Link>
                <div className='flex gap-5 items-center tracking-wide font-light'>
                    <div>${price}</div>
                    <div>{quantity}</div>
                    <RiCloseFill className="transition-all text-slate-400 hover:ease-in hover:text-white" onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
}

export default ItemInHoverCart;
