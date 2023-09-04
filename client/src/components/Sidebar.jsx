import React, { useState } from "react";
import jsonData from "../../../server/seeders/data/master-data.json"; 
import "../App.scss"; // Add your sidebar styling

const Sidebar = ({ onFilterChange }) => {
  // Extract the brands from the JSON data
  const brands = [...new Set(jsonData.watches.map((watch) => watch.brand.name))];

  // Initialize the selectedBrand state
  const [selectedBrand, setSelectedBrand] = useState("");

  // Handle filter button click
  const handleFilterClick = (brand) => {
    setSelectedBrand(brand);
    onFilterChange(brand); // Pass the selected brand to the parent component
  };

  return (
    <div className="sidebar">
      <h2>Brands</h2>
      <ul>
        <li>
          <button
            className={selectedBrand === "" ? "active" : ""}
            onClick={() => handleFilterClick("")}
          >
            All
          </button>
        </li>
        {brands.map((brand, index) => (
          <li key={index}>
            <button
              className={selectedBrand === brand ? "active" : ""}
              onClick={() => handleFilterClick(brand)}
            >
              {brand}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
