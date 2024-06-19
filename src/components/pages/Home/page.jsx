import React from "react";
import AirPodsBanner from "../../Additional/AirPodsBanner";
import ProductsCycle from "../../Additional/ProductsCycle";
import ProductsCycle2 from "../../Additional/ProductsCycle2";
import ImageBanner from "../../Additional/ImageBanner";
import PageTitle from "../../Additional/PageTitle";

function Home() {

  return (
    <div>
      <AirPodsBanner />
      <PageTitle text1="Featured | Upto 75% off" />
      <ProductsCycle />
      <div className="relative">
        <div className="absolute hidden text-slate-200 font-bold sm:block sm:text-6xl sm:ml-20 sm:mt-8 lg:text-7xl lg:ml-32 lg:mt-14 xl:text-8xl xl:ml-52 xl:mt-24">
          <span className="block mb-5">Upto</span>
          <span className="block">65% off</span>
        </div>
        <ImageBanner img_url="/homepage/sony.jpg" img_alt_text="not-found" />
      </div>

      <PageTitle text1="Top deals on smartphones" />

      <ProductsCycle2 />
    </div>
  );
}

export default Home;
