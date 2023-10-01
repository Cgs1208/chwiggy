import React from "react";
import { CDN_URL } from "../utils/constans";
import { useDispatch } from "react-redux";
import { cartActions } from "../utils/cartSlice";

function ItemList({ items }) {
  const dispatch = useDispatch();

  const addCartHandler = (item) => {
    //dispatch action
    dispatch(cartActions.addToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-1 mx-16 rounded-md bg-black text-white shadow-lg"
                onClick={() => addCartHandler(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
              alt="dish-photo"
            />
          </div>
        </div>
      ))}
    </div>
  );
  debugger;
}

export default ItemList;
