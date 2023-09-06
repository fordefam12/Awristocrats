import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client"; // Import useQuery hook
import "./Women.scss";
import { QUERY_WATCHES } from "../../utils/queries"; // Import your queries

const Women = () => {
  const [filter, setFilter] = useState({
    men: false,
    women: true,
    selectedBrands: [],
  });

  // Extract all unique brand names from the watches data
 

  // Function to handle brand checkbox changes
  const handleBrandCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilter({
      ...filter,
      selectedBrands: checked
        ? [...filter.selectedBrands, name]
        : filter.selectedBrands.filter((brand) => brand !== name),
    });
  };

  // Query watches data using Apollo Client's useQuery hook
  const { loading, error, data } = useQuery(QUERY_WATCHES, {
    variables: {
      brandName: filter.selectedBrands.join(","), 
      gender: filter.women ? "F" : "",
    },
  });

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  const uniqueBrands = Array.from(
    new Set(data?.watches.map((watch) => watch.brandName)) // Use the data from the query
  );
  if (error) return <p>Error: {error.message}</p>;

  // Filter watches based on selected brands
  const updatedWatches = data?.watches || [];
console.log(updatedWatches)
  return (
    <div className="womens-watches-container">
      <div className="sidebar">
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
        <p>Number of Watches Displayed: {updatedWatches.length}</p>
        <div className="womens-watches">
          {updatedWatches.map((watch, index) => (
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
      </div>
    </div>
  );
};

export default Women;