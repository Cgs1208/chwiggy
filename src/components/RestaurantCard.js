import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../utils/constans";

function RestaurantCard({ resList }) {
  const {
    name,
    costForTwo,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = resList?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Food pic"
      />
      <h3>{name}</h3>
      <h5>{costForTwo}</h5>
      <h5>
        {cuisines.slice(0, 5).join(", ")} {/* Display the first two cuisines */}
        {cuisines.length > 2 && " ..."}{" "}
        {/* Display ellipsis if there are more cuisines */}
      </h5>
      <h5>Rating: {avgRating} &#9733;</h5>
      <h5>ETA: {deliveryTime} minutes</h5>
    </div>
  );
}

export default RestaurantCard;
