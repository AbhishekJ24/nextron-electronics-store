import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from "../../Additional/PageTitle";
import ProductsCycle from "../../Additional/ProductsCycle";
import { HiChevronRight } from "react-icons/hi";
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';

function Page() {
  const params = useParams()
  const [idx, setIdx] = useState(0)
  const [products, setProducts] = useState([])
  const [skeleton, setSkeleton] = useState(true)
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const id = params.id
  const product = products.find((prod) => prod.id === parseInt(id, 10));
  const images = [product?.image, "/samples/1.jpg", "/samples/2.jpg", "/samples/3.jpg", "/samples/4.jpg"]

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProducts = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setProducts(data);
        setTimeout(() => {
          setSkeleton(false);
        }, 3000);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (id >= 1 && id <= 20) {
      fetchProducts("https://nextron-electronics-store.onrender.com/api/products/1");
    } else {
      fetchProducts("https://nextron-electronics-store.onrender.com/api/products/2");
    }
  }, [id]);

  const toggleTechnicalDetails = () => {
    setShowTechnicalDetails(!showTechnicalDetails);
  };

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const handleAddToCart = () => {
    //
    //
  };

  const handleBuyNow = () => {
    //
    //
  };

  const handleChangeImage = (i) => {
    setIdx(i)
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="bg-slate-200 w-11/12 mx-auto max-sm:my-5 max-md:my-8 my-10 p-12 rounded-2xl flex flex-col gap-20">
        <div className='flex max-md:flex-col justify-around gap-10'>
          {
            !skeleton ? (
              <div>
                <div className='flex max-lg:flex-col-reverse gap-10 max-lg:justify-center items-center'>
                  <div className='flex lg:flex-col gap-4'>
                    <button onClick={() => handleChangeImage(0)}>
                      <div className='bg-slate-100 px-4 rounded-lg'>
                        <img className='w-16 h-16 lg:w-28 lg:h-28 object-contain mix-blend-multiply' src={images[0]} alt="" />
                      </div>
                    </button>
                    <button onClick={() => handleChangeImage(1)}>
                      <div className='bg-slate-100 px-4 rounded-lg'>
                        <img className='w-16 h-16 lg:w-28 lg:h-28 object-contain' src={images[1]} alt="" />
                      </div>
                    </button>
                    <button onClick={() => handleChangeImage(2)}>
                      <div className='bg-slate-100 px-4 rounded-lg'>
                        <img className='w-16 h-16 lg:w-28 lg:h-28 object-contain' src={images[2]} alt="" />
                      </div>
                    </button>
                    <button onClick={() => handleChangeImage(3)}>
                      <div className='bg-slate-100 px-4 rounded-lg'>
                        <img className='w-16 h-16 lg:w-28 lg:h-28 object-contain' src={images[3]} alt="" />
                      </div>
                    </button>
                  </div>
                  <div className='py-8 px-12 bg-slate-100 rounded-3xl'>
                    <img className='w-52 h-52 lg:w-96 lg:h-96 object-contain mix-blend-multiply transition-all hover:ease-in hover:scale-105' src={images[idx]} alt={product.title} />
                  </div>
                </div>
              </div>
            ) : (
              <Skeleton
                variant='rectangular'
                animation="wave"
                className='rounded-xl w-[40%] max-md:w-[80%] max-md:m-auto'
                height={575}
              />
            )
          }

          <div className='w-11/12 m-auto lg:w-1/2 flex flex-col justify-center gap-24'>
            <div>
              {
                !skeleton ?
                  <h1 className="text-slate-800 max-sm:text-3xl max-md:text-4xl max-md:text-center text-5xl font-bold mb-4 tracking-wide leading-[1.1]">{product.title}</h1> : <Skeleton animation="wave" variant="text" className='rounded-xl' sx={{ fontSize: '5rem' }} />
              }
              {
                !skeleton ?
                  <p className="text-slate-600 max-sm:text-base text-lg mb-4">{product.description}</p>
                  :
                  <Skeleton animation="wave" variant='text' className='rounded-xl' sx={{ fontSize: '2rem' }} />
              }
              {
                !skeleton ?
                  <>
                    <p className="text-5xl font-extrabold tracking-wide text-slate-800 my-8">${product.price}</p>
                    <div className="flex gap-5 max-md:justify-center">
                      <button
                        className="bg-slate-800 text-slate-50 hover:bg-slate-600 text-md lg:text-lg font-bold py-2 px-4 rounded-lg"
                        onClick={handleBuyNow}
                      >
                        Buy Now
                      </button>
                      <button
                        className="bg-slate-600 text-slate-50 hover:bg-slate-400 text-md lg:text-lg font-bold py-2 px-4 rounded-lg"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </> : <Skeleton animation="wave" variant='rectangular' className='rounded-xl max-md:mt-16 mt-10 w-4/5 max-md:mx-auto' height={100} />
              }
            </div>

            {
              !skeleton ?
                <div>
                  <div className="mb-4">
                    <p><span className="font-semibold">Title: </span>{product.title}</p>
                    <p><span className="font-semibold">Brand: </span>Random Brand</p>
                    <p><span className="font-semibold">Model Name: </span>Random Model</p>
                    <p><span className="font-semibold">Screen Size: </span>15.6 Inches</p>
                    <p><span className="font-semibold">Colour: </span>Steel Gray</p>
                    <p><span className="font-semibold">CPU Model: </span>Random CPU Model</p>
                    <p><span className="font-semibold">RAM Memory Installed Size: </span>8 GB</p>
                    <p><span className="font-semibold">Operating System: </span>Random OS</p>
                    <p><span className="font-semibold">Special Feature: </span>Random Special Feature</p>
                    <p><span className="font-semibold">Graphics Card Description: </span>Random Graphics Card</p>
                    <p><span className="font-semibold">Graphics Coprocessor: </span>Random Coprocessor</p>
                  </div>
                  <h2 className="text-xl font-bold mb-2">About this item</h2>
                  <ul className="list-disc list-inside mb-4">
                    <li>Processor: Random Processor Description</li>
                    <li>Visibly Stunning: Random Visual Description</li>
                    <li>Internal Specifications: Random Internal Specs</li>
                    <li>Ports: Random Ports Description</li>
                    <li>Keyboard: Random Keyboard Description</li>
                  </ul>
                </div>
                : <Skeleton animation="wave" variant='rectangular' className='rounded-xl' height={300} />
            }
          </div>
        </div>
        {!skeleton ?
          <div className='lg:w-11/12'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg bg-transparent">
              <div className='w-11/12'>
                <h2 className="text-lg font-bold mb-4">Technical Details</h2>
                <table className="technical-details table-auto">
                  <tbody>
                    <tr>
                      <td className="font-semibold">Brand</td>
                      <td>Acer</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Manufacturer</td>
                      <td>Acer, ACER INDIA PRIVATE LIMITED, RS No.38/2, Sedarpet Village, Villanur Commune, Poducherry - 605111.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Series</td>
                      <td>Aspire Lite</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Colour</td>
                      <td>Steel Gray</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Form Factor</td>
                      <td>Laptop</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Standing screen display size</td>
                      <td>15.6 Inches</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Screen Resolution</td>
                      <td>1920 x 1080 pixels</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Resolution</td>
                      <td>1920 x 1080 Pixels</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Package Dimensions</td>
                      <td>50.4 x 32.7 x 9.1 cm; 1.6 kg</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Batteries</td>
                      <td>1 Lithium Ion batteries required. (included)</td>
                    </tr>
                    {showTechnicalDetails && <>
                      <tr>
                        <td className="font-semibold">Item model number</td>
                        <td>AL15-41</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Processor Brand</td>
                        <td>AMD</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Processor Type</td>
                        <td>Ryzen 3 5300U</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Processor Speed</td>
                        <td>2.6 GHz</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Processor Count</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Memory Technology</td>
                        <td>DDR4</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Computer Memory Type</td>
                        <td>DDR4 SDRAM</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Maximum Memory Supported</td>
                        <td>32 GB</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Hard Disk Description</td>
                        <td>SSD</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Hard Drive Interface</td>
                        <td>Solid State</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Audio Details</td>
                        <td>Speakers</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Graphics Coprocessor</td>
                        <td>AMD Radeon Graphics</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Graphics Chipset Brand</td>
                        <td>AMD</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Graphics Card Description</td>
                        <td>Integrated</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Graphics RAM Type</td>
                        <td>DDR4 SDRAM</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Graphics Card Interface</td>
                        <td>Integrated</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Connectivity Type</td>
                        <td>Wi-Fi</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Number of USB 2.0 Ports</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Number of USB 3.0 Ports</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Wattage</td>
                        <td>65 Watts</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Operating System</td>
                        <td>Windows 11 Home</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Are Batteries Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Lithium Battery Energy Content</td>
                        <td>36 Watt Hours</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Lithium Battery Weight</td>
                        <td>0.5 Grams</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Number of Lithium Ion Cells</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Number of Lithium Metal Cells</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Included Components</td>
                        <td>1U (contains Laptop 1N, Power cord 1N, Adapter 1N, User Manual 1N)</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Manufacturer</td>
                        <td>Acer</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Country of Origin</td>
                        <td>China</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Item Weight</td>
                        <td>1 kg 600 g</td>
                      </tr>
                    </>
                    }
                    <tr className='text-blue-500'>
                      {showTechnicalDetails ? <button className='flex items-center font-extrabold hover:underline mt-5  text-sm' onClick={toggleTechnicalDetails}> <HiChevronRight /> Read Less</button> : <button className='flex items-center font-extrabold hover:underline mt-5 text-sm' onClick={toggleTechnicalDetails}><HiChevronRight />Read More</button>}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-4">Additional Information</h2>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="font-semibold">ASIN</td>
                      <td>B0CWTSF1TK</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Customer Reviews</td>
                      <td>3.9 out of 5 stars (402 ratings)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Best Sellers Rank</td>
                      <td>#1,974 in Computers & Accessories</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Date First Available</td>
                      <td>29 February 2024</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Packer</td>
                      <td>ACER INDIA PRIVATE LIMITED, RS No.38/2, Sedarpet Village, Villanur Commune, Poducherry - 605111.</td>
                    </tr>
                    {showAdditionalInfo && <>
                      <tr>
                        <td className="font-semibold">Importer</td>
                        <td>ACER INDIA PRIVATE LIMITED Embassy Heights, 6th Floor, No. 13, Magrath Road, Next to HOSMAT Hospital, Bangalore, INDIA – 560025</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Net Quantity</td>
                        <td>1 Count</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Generic Name</td>
                        <td>Laptop</td>
                      </tr>
                    </>}
                    <tr className='text-blue-500'>
                      {showAdditionalInfo ? <button className='flex items-center font-extrabold hover:underline mt-5  text-sm' onClick={toggleAdditionalInfo}> <HiChevronRight /> Read Less</button> : <button className='flex items-center font-extrabold hover:underline mt-5 text-sm' onClick={toggleAdditionalInfo}> <HiChevronRight /> Read More</button>}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          : <Skeleton animation="wave" variant='rectangular' className='rounded-xl w-4/5 mx-auto' height={500} />}
      </div>
      <PageTitle text1="Related Products" />
      <ProductsCycle />
    </>
  );
}

export default Page;
