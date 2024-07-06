import React, { useEffect, useState } from "react";
import PageTitle from "../../Additional/PageTitle";
import ProductCard from "../../Additional/ProductCard";
import CreditCard from "../../Additional/CreditCard";
import Loader from "../../Additional/Loader";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/productsStore/productsReducer";

function Page() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://nextron-electronics-store.onrender.com/api/products');
        const products = await response.json();
        setData(products);
        dispatch(setProducts(products));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [dispatch]);

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
                img_url={product.image} // Assuming the image field is directly available
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
