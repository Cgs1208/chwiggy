import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  const clickHandler = () => {
    setShowIndex();
  };

  return (
    //accordian header
    <div className=" bg-gray-100 w-6/12 mx-auto my-4 p-4 rounded-md shadow-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={clickHandler}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;
