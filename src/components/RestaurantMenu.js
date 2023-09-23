import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id); //this is a custom hook to fetch restaurant menu details

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100} Rs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
