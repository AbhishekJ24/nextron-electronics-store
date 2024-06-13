import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer px-6 py-10 md:px-24 md:py-14 flex flex-wrap justify-around">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="logo font-semibold text-4xl md:text-5xl text-white mb-4">
          .nextron
          {/* <img src="/nextron-logo-text.png" alt="" /> */}
        </div>
        <h2 className="text-sm md:text-base">
          Nextron Electronics Store is an electronics marketplace based out of
          NYC.
        </h2>
        <div className="flex gap-5 items-center mt-3">
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
      <div className="w-full md:w-1/2 flex flex-wrap justify-around md:gap-32 md:justify-end">
        <ul className="w-1/2 md:w-auto mb-8 md:mb-0">
          <li className="text-white text-lg md:text-xl mb-2">Products</li>
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
        <ul className="w-1/2 md:w-auto">
          <li className="text-white text-lg md:text-xl mb-2">Company</li>
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
        <ul className="w-1/2 md:w-auto mb-8 md:mb-0">
          <li className="text-white text-lg md:text-xl mb-2">
            Let Us Help You
          </li>
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
