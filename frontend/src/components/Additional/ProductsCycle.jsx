import React, { useState, useEffect } from 'react';
import ProductCard from "../Additional/ProductCard"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function ProductsCycle() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://nextron-electronics-store.onrender.com/api/products?limit=100");
        const {products} = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setProductsPerPage(1);
      } else if (width < 820) {
        setProductsPerPage(2);
      } else if (width < 1050) {
        setProductsPerPage(3);
      } else if (width < 1400) {
        setProductsPerPage(4);
      } else {
        setProductsPerPage(5);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) =>
        prevOffset >= products.length - productsPerPage ? 0 : prevOffset + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [products.length, productsPerPage]);

  const handlePrevClick = () => {
    setOffset((prevOffset) => Math.max(prevOffset - productsPerPage, 0));
  };

  const handleNextClick = () => {
    setOffset((prevOffset) =>
      Math.min(prevOffset + productsPerPage, products.length - productsPerPage)
    );
  };

  return (
    <div className="flex gap-10 justify-center items-center py-20 min-w-full px-5 min-h-[30rem]">
      <button onClick={handlePrevClick} disabled={offset === 0}> <FaChevronLeft /> </button>
      {products.slice(offset, offset + productsPerPage).map((product) => (
          <ProductCard
            key={product.id}
            prodId={product.id}
            img_url={product.image}
            img_alt_text={product.title}
            product_name={product.title}
            product_price={`${product.price}`}
            show={false}
            bg_color="bg-slate-100"
          />
      ))}
      <button onClick={handleNextClick} disabled={offset >= products.length - productsPerPage}> <FaChevronRight /> </button>
    </div>
  );
}

export default ProductsCycle;
