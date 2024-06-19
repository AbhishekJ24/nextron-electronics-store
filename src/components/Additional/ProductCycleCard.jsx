import React from 'react';

function ProductCycleCard({ product_img, product_title, product_price }) {
  return (
    <div className="hover:bg-slate-50 w-64 h-96 px-4 py-6 shadow-lg rounded-lg flex flex-col items-center justify-between">
      <img className="w-40 h-40 object-contain hover:scale-110 hover:ease-out transition-all mix-blend-multiply" src={product_img} alt={product_title} />
      <div className="text-center">
        <h2 className="text-xl mb-2">{product_title}</h2>
        <h2 className="font-bold text-lg">{product_price}</h2>
      </div>
    </div>
  );
}

export default ProductCycleCard;
