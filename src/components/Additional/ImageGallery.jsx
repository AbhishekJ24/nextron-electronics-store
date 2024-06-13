import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ImageGallery({ images, delay = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [delay, images.length]);

  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[currentIndex].src}
          src={images[currentIndex].src}
          alt="not-found"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        />
      </AnimatePresence>
    </div>
  );
}

export default ImageGallery;
