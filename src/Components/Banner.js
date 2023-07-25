import React, { useEffect, useState } from "react";

const Banner = () => {
  const images = [
    "https://m.media-amazon.com/images/I/715rCbyx+lL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61LJuncRRcL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61z0rXIPOWL._SX3000_.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-[300px]">
      <img className="h-full w-full bg-cover" src={images[currentImage]} alt="Banner" />
    </div>
  );
};

export default Banner;
