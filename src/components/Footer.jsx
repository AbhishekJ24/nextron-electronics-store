import React from "react";

function Footer() {
  return (
    <footer className="footer py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Nextron Electronics</h2>
            <p className="mt-2 text-sm">
              &copy; {new Date().getFullYear()} Nextron Electronics. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <a target="_blank" href="/"><img className="rounded-lg opacity-90" src="src/assets/facebook.svg" alt="" /></a>
            <a target="_blank" href="/"><img className="rounded-lg opacity-90" src="src/assets/instagram.svg" alt="" /></a>
            <a target="_blank" href="/"><img className="rounded-lg opacity-90" src="src/assets/whatsapp.svg" alt="" /></a>
            <a target="_blank" href="/"><img className="rounded-lg opacity-90" src="src/assets/youtube.svg" alt="" /></a>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4 text-sm">
          <a href="/about" className="hover:text-gray-400">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
