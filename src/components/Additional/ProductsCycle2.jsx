import React, { useState, useEffect } from 'react';
import ProductCycleCard from './ProductCycleCard';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function ProductsCycle2() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
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
    }, 2500);
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
    <div className="flex gap-10 justify-center items-center py-20 min-h-[30rem]">
      <button className='ml-2' onClick={handlePrevClick} disabled={offset === 0}> <FaChevronLeft /> </button>
      {products.slice(offset, offset + productsPerPage).map((product) => (
          <ProductCycleCard
            key={product.id}
            product_img={product.category.image}
            product_title={product.title + " " + product.description.split(" ")[2]}
            product_price={`$${product.price}`}
          />
      ))}
      <button className='mr-2' onClick={handleNextClick} disabled={offset >= products.length - productsPerPage}> <FaChevronRight /> </button>
    </div>
  );
}

export default ProductsCycle2;
