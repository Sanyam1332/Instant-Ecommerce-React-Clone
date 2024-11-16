import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AutoSlidingBanner = () => {
  const images = [
    "images/banner1.png",
    "images/banner2.png",
    "images/banner3.png",
    "images/banner4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <Link
        to={`/homeBanner${currentIndex}`}
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              height: "40rem",
              width: "100%",
              flexShrink: 0,
              padding: "4rem",
              paddingLeft: "6rem",
              paddingRight: "6rem",
            }}
          />
        ))}
      </Link>
    </div>
  );
};

export default AutoSlidingBanner;
