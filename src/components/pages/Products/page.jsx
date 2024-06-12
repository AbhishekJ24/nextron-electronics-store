import React, { useEffect, useState } from "react";
import ProductCard from "../../Additional/ProductCard";

async function fetchProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let jresp = await response.json();
  return jresp.products; // Extract the 'products' array from the response
}

function Page() { // Capitalize the component name
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setData(products);
    }
    getProducts();
  }, []);

  return (
    <>
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
    </>
  );
}

export default Page;
