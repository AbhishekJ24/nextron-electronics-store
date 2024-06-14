import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer md:flex md:justify-between standard-responsive py-8 text-sm md:text-base lg:text-lg">
      <div className="md:text-left text-justify mb-14">
        <div className="text-white font-bold text-lg md:text-xl mb-1">
          Our store
        </div>
        <h2 className="mb-5 md:mb-3 md:w-1/2">
          Nextron Electronics Store, based in NYC, offers the latest gadgets and
          devices, from smartphones and laptops to gaming gear and home
          entertainment systems. We prioritize quality, competitive pricing, and
          exceptional customer service. Explore the future of technology with us
          at Nextron Electronics Store.
        </h2>

        <div className="flex items-center justify-center md:justify-normal gap-4">
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

      <div className="flex flex-wrap gap-8 w-3/4 text-sm md:text-base lg:text-lg">
        <ul>
          <li className="text-white mb-3">Products</li>
          <li>
            <a href="/">Televisions and Accessories</a>
          </li>
          <li>
            <a href="/">Home Appliances</a>
          </li>
          <li>
            <a href="/">Phone and Wearables</a>
          </li>
          <li>
            <a href="/">Audio and Video</a>
          </li>
          <li>
            <a href="/">Cameras and Accessories</a>
          </li>
        </ul>

        <ul className="">
          <li className="text-white mb-3">Company</li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Buying Guide</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>

        <ul className="">
          <li className="text-white mb-3">Let Us Help You</li>
          <li>
            <a href="/">Your Account</a>
          </li>
          <li>
            <a href="/">Returns Center</a>
          </li>
          <li>
            <a href="/">100% Purchase Protection</a>
          </li>
          <li>
            <a href="/">Nextron App Download</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
