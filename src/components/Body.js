import React, { useEffect, useState } from "react";
import RestaurantCard, { WithVegLabel } from "./RestaurantCard";
//import "./Body.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URl } from "../utils/constans";

//not using key <<<< index as key  <<< unique ID
function Body() {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const RestaurantCardVeg = WithVegLabel(RestaurantCard);

  const [searchText, setSearchtext] = useState("");

  const filterHandler = () => {
    const topRatedRestaurant = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredResList(topRatedRestaurant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_URl);
    const json = await response.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; //optional chaining
    setResList(restaurants);
    setFilteredResList(restaurants);
  };

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchtext(value);
  };

  const filterResHandler = () => {
    const filteredRestaurants = resList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRestaurants.length > 0) {
      setFilteredResList(filteredRestaurants);
    }
  };

  const isOnline = useOnlineStatus();

  if (isOnline === false)
    return (
      <h1>Looks like you are offline! Please check internet connection 🤷‍♂️</h1>
    );

  //conditional rendering
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={searchHandler}
          />
          <button
            className="px-4 m-4 rounded-lg bg-orange-200"
            onClick={filterResHandler}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 m-4 rounded-lg bg-orange-200"
            onClick={filterHandler}
          >
            Top rating restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap grow">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {/* if the res having aggregatedDiscountInfoV3 then show discount label */}
            {restaurant.info.veg ? (
              <RestaurantCardVeg resList={restaurant} />
            ) : (
              <RestaurantCard resList={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
