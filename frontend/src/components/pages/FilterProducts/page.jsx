import React, { useEffect, useState } from 'react'
import CreditCard from '../../Additional/CreditCard';
import PageTitle from '../../Additional/PageTitle';
import Loader from '../../Additional/Loader';
import ProductCard from '../../Additional/ProductCard';
import { useParams } from 'react-router-dom';

async function fetchProducts(query) {
    let response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    let jresp = await response.json();
    return jresp.products;
}

function page() {

    const params = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function getProducts() {
            setIsLoading(true)
            const products = await fetchProducts(params.query);
            setData(products);
            setIsLoading(false);
        }
        getProducts();
    }, [params]);

    return (
        <>
            <CreditCard />
            <PageTitle text1="Search Results" text2={params.query} />
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
                                img_url={item.images[0]}
                                img_alt_text={item.title}
                                product_name={item.title}
                                product_price={item.price}
                            />
                        );
                    })}
                </div>
            )}
        </>
    )
}

export default page
