import React from "react";
import "./Men.scss";
import jsonData from "../../../../server/seeders/data/master-data.json"; 

const { watches } = jsonData;

const Men = () => {
  // Filter the watches to display only men's watches
  const mensWatches = watches.filter((watch) => watch.gender === "M");

  return (
    <div className="mens-watches-container">
    <h1>Men's Watches</h1>
    <div className="mens-watches">
      {mensWatches.map((watch, index) => (
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
);
};

export default Men;
