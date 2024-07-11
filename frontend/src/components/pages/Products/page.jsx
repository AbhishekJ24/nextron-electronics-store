import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../Additional/PageTitle";
import ProductCard from "../../Additional/ProductCard";
import CreditCard from "../../Additional/CreditCard";
import Loader from "../../Additional/Loader";
import PaginationComponent from "../../Additional/PaginationComponent";

function Page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const limit = useRef(6)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`https://nextron-electronics-store.onrender.com/api/products?page=${currentPage}&limit=${limit}`);
        const { products, totalPages } = await response.json();
        setData(products);
        setTotalPage(totalPages)
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [currentPage, limit]);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <CreditCard />
      <PageTitle text1="Products" text2="Home / Products" />
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex gap-5 m-auto min-h-screen w-3/4 flex-wrap my-10">
            {data.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  prodId={product.id}
                  img_url={product.image}
                  img_alt_text="not-found"
                  product_name={product.title}
                  product_price={`${product.price}`}
                />
              );
            })}
          </div>
          <div className="flex justify-center my-20">
            <PaginationComponent currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPage} />
          </div>
        </>
      )}
    </>
  );
}

export default Page;
