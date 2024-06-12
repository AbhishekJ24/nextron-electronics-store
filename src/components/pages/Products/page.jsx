import React, { useEffect, useState } from "react";
import ProductCard from "../../Additional/ProductCard";

async function fetchProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let jresp = await response.json();
  return jresp;
}

function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const f = await fetchProducts();
      setData(f);
    }
    getProducts();
  }, []);

  return (
    <>
      <div>
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
    </>
  );
}

export default page;

// 'https://dummyjson.com/products'
