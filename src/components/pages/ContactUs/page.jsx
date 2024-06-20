import React from "react";
import { AddressMap } from "../../Additional/AddressMap";
import ContactForm from "../../Additional/ContactForm";

function page() {
  return (
    <>
      <div className="w-3/4 m-auto">
        <h2 className="text-slate-900 font-semibold text-[50px] lg:text-[60px] mt-14 leading-none mb-6">
          We're here for you
        </h2>
        <h2 className="text-slate-500 text-[15px] sm:text-[17.5px] lg:text-[20px] mb-10">
          Our friendly team is always here to chat.
        </h2>
        <AddressMap address_url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0499141164682!2d77.26012237610716!3d28.53821938835622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3984902dcc9%3A0x8747c1e87565f69c!2sNextron%20Technology%20LLP!5e0!3m2!1sen!2sin!4v1718254721269!5m2!1sen!2sin" />
        <div className="flex max-md:flex-wrap max-md:my-16 my-28 gap-20">
          <div className="w-1/3 max-md:w-4/5 max-md:m-auto">
            <ContactForm />
          </div>
          <div className="w-2/3 max-md:m-auto">
            <h2 className="text-slate-900 font-semibold text-[50px] lg:text-[60px] mt-14 leading-none mb-6 w-3/4">
              Store Locations
            </h2>
            <div className="text-slate-500 grid max-sm:grid-cols-1 grid-cols-2 gap-20 text-[20px]">
              <div>
                <span>+91 (734) 01-69801</span>
                <div>
                  1, No 265, 1st Floor, Datareya Swamy Temple Complex, S C Road,
                  Gandhi Nagar, Bengaluru, Karnataka (KA)
                </div>
              </div>
              <div>
                <span>+1 (626) 205-2601</span>
                <div>340 Meadow Ln Monrovia, California(CA), 91016</div>
              </div>
              <div>
                <span>+1 (540) 206-3379</span>
                <div>1321 Rorer Ave SW Roanoke, Virginia(VA), 24016</div>
              </div>
              <div>
                <span>+1 (978) 774-9720</span>
                <div>2 Trask St Danvers, Massachusetts(MA), 01923</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
