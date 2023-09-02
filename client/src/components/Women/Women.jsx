import React from "react";
import "./Women.scss";
import jsonData from "../../../../server/seeders/data/master-data.json"; 

const { watches } = jsonData;

const Women = () => {
  // Filter the watches to display only Women's watches
  const WomensWatches = watches
    .filter((watch) => watch.gender === "F")
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort by watch name

  return (
    <div className="Womens-watches-container">
      <h1>Women's Watches</h1>
      <div className="Womens-watches">
        {WomensWatches.map((watch, index) => (
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

export default Women;
