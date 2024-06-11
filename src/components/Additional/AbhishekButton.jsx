import React from "react";
import { useDispatch, useSelector } from "react-redux";

function AbhishekButton({ text }) {
  const itemCount = useSelector((state) => state.cartCount.value);
  const dispatch = useDispatch();
  return (
    
  );
}

export default AbhishekButton;
