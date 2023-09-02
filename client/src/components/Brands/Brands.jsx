import React from "react";
import "./Brands.scss";

const Brands = () => {
  // Replace these image URLs with your actual brand logos
  const brandImages = [
    "./src/assets/images/Logos/rolexLogo.png",
    "./src/assets/images/Logos/audemars_piguet_watch_logo_-_Google_Search-removebg-preview.png",
    "./src/assets/images/Logos/Official-Patek-Philippe-Logo-removebg-preview.png",
    "./src/assets/images/Logos/Longines-logo-500x281-removebg-preview.png",
    "./src/assets/images/Logos/jaeger-leCoultrewatch_logo_-_Google_Search-removebg-preview.png",
    "./src/assets/images/Logos/cartierLogo-removebg-preview.png",
  ];

  return (
    <div className="brands-container">
      <h1>Our Brands</h1>
      <div className="brand-images">
        {brandImages.map((image, index) => (
          <div className="brand" key={index}>
            <img src={image} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
