import { useState, useEffect } from "react";
//in Body.js we can export the fetchData method to custom hook
//this is the custom hook related to that but not used

const useRestaurants = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

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

  return { resList, filteredResList };
};

export default useRestaurants;
