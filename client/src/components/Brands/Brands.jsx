import React, { useState } from "react";
import "./Brands.scss";
import jsonData from "../../../../server/seeders/data/master-data.json"; // Adjust the path as needed

const Brands = () => {
  // Create an array of brand objects with image URLs and brand names
  const brandData = [
    {
      name: "Rolex",
      image: "./src/assets/images/Logos/rolexLogo.png",
    },
    {
      name: "Audemars Piguet",
      image: "./src/assets/images/Logos/audemars_piguet_watch_logo_-_Google_Search-removebg-preview.png",
    },
    {
      name: "Patek Philippe",
      image: "./src/assets/images/Logos/Official-Patek-Philippe-Logo-removebg-preview.png",
    },
    {
      name: "Longines",
      image: "./src/assets/images/Logos/Longines-logo-500x281-removebg-preview.png",
    },
    {
      name: "Jaeger-LeCoultre",
      image: "./src/assets/images/Logos/jaeger-leCoultrewatch_logo_-_Google_Search-removebg-preview.png",
    },
    {
      name: "Cartier",
      image: "./src/assets/images/Logos/cartier-removebg-preview (1).png",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(null);
  const { watches } = jsonData; // Watches data from master-data.json

  // Filter watches based on the selected brand
  const filteredWatches = selectedBrand
    ? watches.filter((watch) => watch.brand.name === selectedBrand)
    : [];

  return (
    <div className="brands-container">
      <h1>Our Brands</h1>
      <div className={`brand-images ${selectedBrand ? "shrink" : ""}`} >
        {brandData.map((brand, index) => (
          <div className="brand" key={index}>
            <a
              href="#"
              onClick={() => setSelectedBrand(brand.name)}
              className={selectedBrand === brand.name ? "active" : ""}
            >
              <img src={brand.image} alt={`Brand ${index + 1}`} />
              <div className="brand-text"> {/* Container for the fading text */}
                <p>{brand.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      {selectedBrand && (
        <>
          <h2>Watches</h2>
          <div className={`watches ${selectedBrand ? "center" : ""}`}>
            {filteredWatches.map((watch, index) => (
              <div className="watch" key={index}>
                <img src={watch.images[0]} alt={watch.name} />
                <p>{watch.name}</p>
                <p>Reference Number: {watch.reference_number}</p>
                <p>Released: {watch.released}</p>
                <p>Limited Number: {watch.limited_nr}</p>
                {/* Add other watch details here */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Brands;
