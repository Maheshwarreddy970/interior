import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`background image ${currentIndex + 1}`}
            className="image border shadow-md h-full w-full rounded-3xl object-cover object-center"
            width={1080}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
