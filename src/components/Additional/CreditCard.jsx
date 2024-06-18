import React from "react";

function CreditCard() {
  return (
    <div className="bg-[#007bff]">
      <section className="text-white flex flex-wrap justify-center text-center items-center gap-3 lg:gap-12 m-auto pb-2">
        <img
          className="h-20 lg:h-24"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"
          alt="Credit cards"
        />
        <div className="text-center">
          <span className="block text-base md:text-lg lg:text-xl">
            Apply today and get
          </span>
          <span className="block text-yellow-400 text-2xl lg:text-3xl font-semibold">
            10% back
          </span>
        </div>
        <p className="m-2">
          in rewards on your first day of purchases when you are approved for
          the Card.
        </p>

        <a href="/" className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg font-semibold text-base md:text-lg">
          Learn More
        </a>
      </section>
    </div>
  );
}

export default CreditCard;
