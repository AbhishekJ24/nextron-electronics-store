import React, { useEffect, useState } from "react";
import PageTitle from "../../Additional/PageTitle";
import ProductCard from "../../Additional/ProductCard";
import CreditCard from "../../Additional/CreditCard";
import Loader from "../../Additional/Loader";

function Page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('http://localhost:3001/api/products/2');
        const products = await response.json();
        setData(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <CreditCard />
      <PageTitle text1="Products" text2="Home / Products" />
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <div className="flex gap-5 m-auto min-h-screen w-3/4 flex-wrap my-10">
          {data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                prodId={product.id}
                img_url={product?.image}
                img_alt_text="not-found"
                product_name={product.title}
                product_price={`${product.price}`}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Page;
