import React, { useState } from "react";
import "./Women.scss";
import jsonData from "../../../../server/seeders/data/master-data.json";

const { watches } = jsonData;

const Women = () => {
  const [filter, setFilter] = useState({
    men: false,
    women: true,
    selectedBrands: [], // Initialize selectedBrands as an empty array
  });

  // Extract all unique brand names from the watches data
  const uniqueBrands = Array.from(
    new Set(watches.map((watch) => watch.brand.name))
  );

  // Function to handle brand checkbox changes
  const handleBrandCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFilter({
        ...filter,
        selectedBrands: [...filter.selectedBrands, name],
      });
    } else {
      setFilter({
        ...filter,
        selectedBrands: filter.selectedBrands.filter((brand) => brand !== name),
      });
    }
  };

  // Function to filter watches based on gender and selected brands
  const filteredWatches = watches.filter(
    (watch) =>
      (filter.men && watch.gender === "M") ||
      (filter.women && watch.gender === "W") ||
      (filter.selectedBrands.length > 0 &&
        filter.selectedBrands.includes(watch.brand.name))
  );

  return (
    <div className="Womens-watches-container">
      <div className="sidebar">
        <h2>Gender Filter</h2>
        <label>
          <input
            type="checkbox"
            name="men"
            checked={filter.men}
            onChange={(event) => setFilter({ ...filter, men: event.target.checked })}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            name="women"
            checked={filter.women}
            onChange={(event) => setFilter({ ...filter, women: event.target.checked })}
          />
          Women
        </label>
        <h2>Brand Filter</h2>
        {uniqueBrands.map((brand, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={brand}
              checked={filter.selectedBrands.includes(brand)}
              onChange={handleBrandCheckboxChange}
            />
            {brand}
          </label>
        ))}
      </div>
      <div className="main-content">
        <h1>Watches</h1>
      <div className="Womens-watches">
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
    </div>
    </div>
  );
};

export default Women;
