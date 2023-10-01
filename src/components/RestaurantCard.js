import React from "react";
//import "./RestaurantCard.css";
import { CDN_URL } from "../utils/constans";

function RestaurantCard({ resList }) {
  const {
    name,
    costForTwo,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = resList?.info;

  return (
    <div
      data-testid="resCard"
      className="rounded-xl p-2 m-2   w-64 h-[465px] bg-[#f0f0f0] border border-solid border-black hover:bg-gray-200 hover:shadow-xl transform hover:scale-95 transition-all duration-200 ease-in-out"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Food pic"
      />
      <h3 className="py-2 text-lg font-bold">{name}</h3>
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

//HOC component
// input-> RestaurantCard => RestaurantCardVeg

export const WithVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="bg-green-400 text-white absolute m-2 ml-3 p-1 rounded-lg z-10">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
