import React, { useContext, useState } from "react";
//import "./Header.css";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [authBtn, setAuthBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const loginHandler = () => {
    authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  //we are subscribing to store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="h-16 flex justify-between bg-red-200 shadow-lg items-center ">
      <div>
        <img className="w-16 " src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div>
        <ul className="flex p-3 m-3">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              Cart{cartItems.length ? `-(${cartItems.length} items)` : ""}
            </Link>
          </li>
          <button
            className="px-5 bg-orange-500 rounded w-20"
            onClick={loginHandler}
          >
            {authBtn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
