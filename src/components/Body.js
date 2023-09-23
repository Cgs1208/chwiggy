import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//not using key <<<< index as key  <<< unique ID
function Body() {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

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
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
    console.log(value);
  };

  const filterResHandler = () => {
    const filteredRestaurants = resList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRestaurants.length > 0) {
      setFilteredResList(filteredRestaurants);
    }
  };

  //conditional rendering
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={searchHandler} />
        <button onClick={filterResHandler}>Search</button>
        <button className="filter-btn" onClick={filterHandler}>
          Top rating restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RestaurantCard resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
