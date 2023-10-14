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

  const handleTopRatedRestaurants = () => {
    setSearchtext("");
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

  const filterResHandler = (e) => {
    const value = e.target.value;
    setSearchtext(value);
    const filteredRestaurants = resList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRestaurants.length > 0) {
      setFilteredResList(filteredRestaurants);
    }
  };

  const handleAllRestaurants = () => {
    setSearchtext("");
    setFilteredResList(resList);
  };

  const isOnline = useOnlineStatus();

  if (isOnline === false)
    return (
      <h1>Looks like you are offline! Please check internet connection 🤷‍♂️</h1>
    );

  //conditional rendering
  return (
    <div className="ml-20">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black px-3 py-1 rounded-full"
            data-testid="searchInput"
            type="text"
            value={searchText}
            placeholder="Search dishes"
            onChange={filterResHandler}
          />
        </div>
        <div>
          <button
            className="px-4 py-1 m-4 rounded bg-orange-200 hover:bg-orange-300"
            onClick={handleAllRestaurants}
          >
            All Restaurants
          </button>
        </div>
        <div>
          <button
            className="px-4 py-1 m-4 rounded bg-orange-200 hover:bg-orange-300"
            onClick={handleTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap grow">
          {filteredResList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* if the res having veg flag then show veg label */}
              {restaurant.info.veg ? (
                <RestaurantCardVeg resList={restaurant} />
              ) : (
                <RestaurantCard resList={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
