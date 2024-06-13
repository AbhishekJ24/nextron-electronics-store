import React from "react";
const AddressMap = ({ address_url }) => {
  return (
    <iframe
      src={address_url}
      width="1200"
      height="400"
      allowFullScreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
export { AddressMap };
