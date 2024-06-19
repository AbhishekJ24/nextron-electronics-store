import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer standard-responsive py-10 sm:flex sm:gap-56 lg:gap-96">
      <div className="mb-10 mx-10 sm:mx-px lg:w-1/4">
        <div className="text-white text-3xl font-bold mb-2">
          Our store
        </div>
        <h2 className="mb-5 lg:text-xl">
          Nextron Electronics Store, based in NYC, offers the latest gadgets and
          devices, from smartphones and laptops to gaming gear and home
          entertainment systems. We prioritize quality, competitive pricing, and
          exceptional customer service. Explore the future of technology with us
          at Nextron Electronics Store.
        </h2>

        <div className="flex gap-5">
          <a target="_blank" href="https://www.facebook.com/">
            <FaFacebook
              className="hover:scale-105 hover:ease-out transition-all"
              size={25}
            />
          </a>

          <a target="_blank" href="https://www.instagram.com/">
            <FaInstagram
              className="hover:scale-105 hover:ease-out transition-all"
              size={28}
            />
          </a>

          <a target="_blank" href="https://www.youtube.com/">
            <FaYoutube
              className="hover:scale-105 hover:ease-out transition-all"
              size={30}
            />
          </a>
        </div>
      </div>

      <div className="mx-10 sm:mx-px lg:w-3/4 flex flex-wrap gap-12">
        <ul>
          <li className="text-white mb-3 text-3xl">Products</li>
          <li>
            <a className="lg:text-xl" href="/">Televisions and Accessories</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Home Appliances</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Phone and Wearables</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Audio and Video</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Cameras and Accessories</a>
          </li>
        </ul>

        <ul className="">
          <li className="text-white mb-3 text-3xl">Company</li>
          <li>
            <a className="lg:text-xl" href="/">About Us</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Careers</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Buying Guide</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">FAQs</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Privacy Policy</a>
          </li>
        </ul>

        <ul className="">
          <li className="text-white mb-3 text-3xl">Let Us Help You</li>
          <li>
            <a className="lg:text-xl" href="/">Your Account</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Returns Center</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">100% Purchase Protection</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Nextron App Download</a>
          </li>
          <li>
            <a className="lg:text-xl" href="/">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
