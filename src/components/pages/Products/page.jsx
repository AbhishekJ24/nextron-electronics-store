import React, { useEffect, useState } from "react";
import ProductCard from "../../Additional/ProductCard";
import CreditCard from "../../Additional/CreditCard";
import Loader from "../../Additional/Loader";

async function fetchProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let jresp = await response.json();
  return jresp.products;
}

function page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setData(products);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  return (
    <>
      <CreditCard />
      <div className="w-3/4 m-auto">
        <h2 className="text-slate-900 font-semibold text-[60px] mt-14">
          Products
        </h2>
        <h2 className="text-slate-500 text-[20px] mb-10">Home / Products</h2>
      </div>
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <div className="flex gap-5 m-auto min-h-screen w-3/4 flex-wrap my-10">
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                img_url="ps4.png"
                img_alt_text="not-found"
                product_name={item.title}
                product_price={item.price+100}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default page;
