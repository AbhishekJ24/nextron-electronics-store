import React, { useEffect, useState } from "react";
import PageTitle from "../../Additional/PageTitle";
import ProductCard from "../../Additional/ProductCard";
import CreditCard from "../../Additional/CreditCard";
import Loader from "../../Additional/Loader";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/productsStore/productsReducer";

async function fetchProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let jresp = await response.json();
  return jresp;
}

function page() {
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setData(products);
      dispatch(setProducts(products))
      setIsLoading(false);
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
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                prodId={item.id}
                img_url={item.image}
                img_alt_text={item.title}
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
