import React from "react";

function CreditCard() {
  return (
    <div className="bg-[#007bff] flex justify-center items-center h-28">
      <section className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/4 flex items-center justify-center mt-4 md:mt-0">
          <img
            className="h-24"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"
            alt="Credit cards"
          />
        </div>
        <div className="md:w-1/4 flex flex-col items-start justify-center mt-4 md:mt-0 space-y-2">
          <h2 id="apply" className="text-white text-lg md:text-xl">
            <span className="block text-base md:text-lg">
              Apply today and get
            </span>
            <span className="block text-2xl md:text-4xl text-yellow-400">
              10% back
            </span>
          </h2>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <p className="text-white text-base md:text-lg">
            in rewards on your first day of purchases when you are approved for
            the Card.
          </p>
        </div>
        <div className="md:w-1/4 flex items-center justify-end mt-4 md:mt-0">
          <a
            href="/site/misc/financing-rewards/pcmcat102500050032.c?id=pcmcat102500050032"
            aria-describedby="apply"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm md:text-base"
            data-track="[context:linkRegion=Financing-Custom_GL-68437,linkPlacement=GHP,linkContent=LearnMore]"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}

export default CreditCard;
