import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-14 h-14 loader rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;