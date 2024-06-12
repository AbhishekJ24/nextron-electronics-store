import React from "react";
import PS5Video from "../../Additional/PS5Video";
import CreditCard from "../../Additional/CreditCard";
import ImageBannerLarge from "../../Additional/ImageBannerLarge";
import ProductCard from "../../Additional/ProductCard";

function Home() {
  return (
    <>
      <CreditCard />
      <div className="flex gap-5 m-auto w-3/4 flex-wrap">
        <ProductCard
          img_url="/iphone15.webp"
          img_alt_text="not-found"
          product_name="Apple iPhone 15 (128GB, Black)"
          product_price="150000"
        />
        <ProductCard
          img_url="/firebolt.webp"
          img_alt_text="not-found"
          product_name="FIRE-BOLTT Gladiator Smartwatch with Bluetooth Calling (49.7mm HD Display, IP67 Water Resistant, Orange Strap)"
          product_price="3499"
        />
        <ProductCard
          img_url="/homepod.webp"
          img_alt_text="not-found"
          product_name="Apple HomePod (2nd Gen) with Built-in Siri Smart Wi-Fi Speaker (Dolby Atmos, Midnight Black)"
          product_price="220000"
        />
        <ProductCard
          img_url="/sony-alpha-1.webp"
          img_alt_text="not-found"
          product_name="SONY Alpha 7 I 24.2MP Full Frame Camera (Body Only, 35.6 x 23.8 mm Sensor, Tiltable Screen)"
          product_price="4990000"
        />
      </div>
      <PS5Video />
      <ImageBannerLarge
        img_url="iphone15-banner.jpg"
        img_alt_text="iphone-15-not-found"
      />
    </>
  );
}

export default Home;
