import React, { useEffect } from "react";
import ProductCard from "../../Additional/ProductCard";
import CreditCard from "../../Additional/CreditCard";
import PageTitle from "../../Additional/PageTitle";

function page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CreditCard />
      <PageTitle text1="Trending" text2="Home / Trending" />
      <div className="flex gap-5 m-auto w-3/4 flex-wrap my-10">
        <ProductCard
          img_url="/Trending/iphone15.webp"
          img_alt_text="not-found"
          product_name="Apple - iPhone 15 Plus 128GB - Black (Verizon)"
          product_price="1299.99"
        />
        <ProductCard
          img_url="/Trending/firebolt.webp"
          img_alt_text="not-found"
          product_name="FIRE-BOLTT Gladiator Smartwatch with Bluetooth Calling (49.7mm HD Display, IP67 Water Resistant, Orange Strap)"
          product_price="49.99"
        />
        <ProductCard
          img_url="/Trending/homepod.webp"
          img_alt_text="not-found"
          product_name="Apple HomePod (2nd Gen) with Built-in Siri Smart Wi-Fi Speaker (Dolby Atmos, Midnight Black)"
          product_price="249.99"
        />
        <ProductCard
          img_url="/Trending/sony-alpha-1.webp"
          img_alt_text="not-found"
          product_name="SONY Alpha 7 I 24.2MP Full Frame Camera (Body Only, 35.6 x 23.8 mm Sensor, Tiltable Screen)"
          product_price="3149.99"
        />
        <ProductCard
          img_url="/Trending/navee-scooter.jpg"
          img_alt_text="not-found"
          product_name="NAVEE - V25 PRO Foldable Electric Scooter w/16 mi Max Operating Range & 20 mph Max Speed - Black"
          product_price="279.99"
        />
        <ProductCard
          img_url="/Trending/insignia-firetv.jpg"
          img_alt_text="not-found"
          product_name="Insignia™ - 58' Class F30 Series LED 4K UHD Smart Fire TV"
          product_price="299.99"
        />
        <ProductCard
          img_url="/Trending/ps5.jpg"
          img_alt_text="not-found"
          product_name="Sony Interactive Entertainment - PlayStation 5 Slim Console Digital Edition - White"
          product_price="449.99"
        />
        <ProductCard
          img_url="/Trending/kamado-grill.jpg"
          img_alt_text="not-found"
          product_name="Kamado Joe Konnected Joe Charcoal Grill - red"
          product_price="1699.00"
        />
      </div>
    </>
  );
}

export default page;
