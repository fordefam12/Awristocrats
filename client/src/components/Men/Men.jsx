import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client"; // Import useQuery hook
import "./Men.scss";
import { QUERY_WATCHES } from "../../utils/queries"; // Import your queries

const Men = () => {
  const [filter, setFilter] = useState({
    men: true,
    women: false,
    selectedBrands: [],
  });

  const handleBrandCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilter({
      ...filter,
      selectedBrands: checked
        ? [...filter.selectedBrands, name]
        : filter.selectedBrands.filter((brand) => brand !== name),
    });
  };


  const { loading, error, data } = useQuery(QUERY_WATCHES, {
    variables: {
      brandName: filter.selectedBrands.join(","), // Pass selected brands as a comma-separated string
      gender: filter.men ? "M" : "", // Use "M" as gender filter if men checkbox is checked
    },
  });

  if (loading) return <p>Loading...</p>;
  const uniqueBrands = Array.from(
    new Set(data?.watches.map((watch) => watch.brandName)) // Use the data from the query
  );
  if (error) return <p>Error: {error.message}</p>;

  const updatedWatches = data?.watches || [];

  return (
    <div className="mens-watches-container">
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
        <div className="mens-watches">
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

export default Men;