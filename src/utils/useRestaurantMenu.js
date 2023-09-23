import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constans";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRefInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();

    setRefInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
