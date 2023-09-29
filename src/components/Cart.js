import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { cartActions } from "../utils/cartSlice";
import { GIF_URL } from "../utils/constans";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h1 className="font-bold m-2 p-2">
              Are you not hungry yet ? Add items to cart
            </h1>
            <div className="w-1/2 mx-auto">
              <img
                src={GIF_URL}
                alt="DIF"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        ) : (
          <div>
            <button
              className="bg-black text-white m-2 p-2 rounded-lg"
              onClick={clearCartHandler}
            >
              Clear Cart
            </button>
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
