import React, { useEffect, useState } from "react";
import ProductCard from "../../Additional/ProductCard";
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex gap-5 m-auto w-3/4 flex-wrap">
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                product_name={item.title}
                product_price={item.price}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default page;
