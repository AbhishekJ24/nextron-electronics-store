import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartIcon() {
  const itemCount = useSelector((state) => state.cartCount.value);

  return (
    <Link to="/cart" className="relative inline-block transition-all hover:ease-out hover:invert">
      <svg
        fill="#ffffff"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="40px"
        height="40px"
        viewBox="0 0 902.86 902.86"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
            />
            <path
              d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"
            />
          </g>
        </g>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.344 3.346a5 5 0 004.91 4.154l.832 6.264a2 2 0 11-1.997 2.236 2 2 0 002.003-1.995l.83-6.263a5 5 0 004.91-4.154L19 3h2m-7 6a2 2 0 100-4 2 2 0 000 4zm0 0V5m-4 4V5m0 4a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
      {itemCount > 0 && (
        <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-white bg-slate-500 rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;
