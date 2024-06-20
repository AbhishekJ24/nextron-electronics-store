import React from "react";

const AddressMap = ({ address_url }) => {
  return (
    <div style={{ position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={address_url}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export { AddressMap };
