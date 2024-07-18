import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import NewsletterForm from "./Additional/NewsletterForm";
import ScrollToTop from "./Additional/ScrollToTop";

function Footer() {
  return (
    <>
      <ScrollToTop />
      <div className="footer standard-responsive py-14 flex flex-wrap gap-10 md:gap-0 md:justify-between">
        <div className="sm:w-1/4 mb-5">
          <div className="text-white font-bold text-xl mb-2">
            Our store
          </div>
          <h2>
            Nextron Electronics Store, based in NYC, offers the latest gadgets and
            devices, from smartphones and laptops to gaming gear and home
            entertainment systems.
          </h2>

          <div className="flex gap-5 mt-3">
            <a target="_blank" href="https://www.facebook.com/">
              <FaFacebook size={25} />
            </a>

            <a target="_blank" href="https://www.instagram.com/">
              <FaInstagram size={28} />
            </a>

            <a target="_blank" href="https://www.youtube.com/">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>

        <ul className="mb-5">
          <li className="text-white font-semibold">Products</li>
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

        <ul className="mb-5">
          <li className="text-white font-semibold">Company</li>
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

        <ul className="mb-5">
          <li className="text-white font-semibold">Let Us Help You</li>
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
        <ul className="mb-5">
          <NewsletterForm />
        </ul>
      </div>
    </>
  );
}

export default Footer;
