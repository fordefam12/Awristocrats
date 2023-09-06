import React, { useState } from "react";
import "./Brands.scss";
import { useQuery } from "@apollo/client";
import { QUERY_WATCHES }  from '../../utils/queries';

const Brands = () => {
  // Create an array of brand objects with image URLs and brand names
  const brandData = [
    {
      name: "Rolex",
      image: "./src/assets/images/Logos/rolexLogo-removebg-preview.png",
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
  // Use Apollo Client's useQuery hook to fetch data
  const { loading, error, data } = useQuery(QUERY_WATCHES, {
    variables: { brandName: selectedBrand, gender: "" }, // Pass your query variables here
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const watches = data.watches;
  // Extract a list of unique brand names from the queried data
  
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
            {watches
              .filter((watch) => watch.brandName === selectedBrand)
              .map((watch, index) => (
                <div className="watch" key={index}>
                  <img src={watch.imageURL} alt={watch.watchName} />
                  <p>{watch.watchName}</p>
                  <p>Reference Number: {watch.referenceNumber}</p>
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