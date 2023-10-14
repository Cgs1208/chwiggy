import useRestaurantMenu from "../utils/useRestaurantMenu";

import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerResMenu from "./ShimmerResMenu";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(null);
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id); //this is a custom hook to fetch restaurant menu details

  if (resInfo === null) return <ShimmerResMenu />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  //we are only taking the array elements which are having type as itemscategory
  const itemCategory =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="my-8 p-2 font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg mb-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {itemCategory.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
