import React from "react";
import ProductCard from "../Additional/ProductCard";

function Home() {
  return (
    <div className="flex gap-5 m-auto w-3/4 flex-wrap">
      <ProductCard
        img_url="src/assets/iphone15.webp"
        img_alt_text="not-found"
        product_name="Apple iPhone 15 (128GB, Black)"
        product_price="150000"
      />
      <ProductCard
        img_url="src/assets/firebolt.webp"
        img_alt_text="not-found"
        product_name="FIRE-BOLTT Gladiator Smartwatch with Bluetooth Calling (49.7mm HD Display, IP67 Water Resistant, Orange Strap)"
        product_price="3499"
      />
      <ProductCard
        img_url="src/assets/homepod.webp"
        img_alt_text="not-found"
        product_name="Apple HomePod (2nd Gen) with Built-in Siri Smart Wi-Fi Speaker (Dolby Atmos, Midnight Black)"
        product_price="220000"
      />
      <ProductCard
        img_url="src/assets/sony-alpha-1.webp"
        img_alt_text="not-found"
        product_name="SONY Alpha 7 I 24.2MP Full Frame Camera (Body Only, 35.6 x 23.8 mm Sensor, Tiltable Screen)"
        product_price="4990000"
      />
    </div>
  );
}

export default Home;
