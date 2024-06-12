import React from "react";
import PS5Video from "../../Additional/PS5Video";
import CreditCard from "../../Additional/CreditCard";
import ImageBannerLarge from "../../Additional/ImageBannerLarge";

function Home() {
  return (
    <>
      <CreditCard />
      <ImageBannerLarge
        img_url="iphone15-banner.jpg"
        img_alt_text="iphone-15-not-found"
      />
      <PS5Video />
    </>
  );
}

export default Home;
