import React, { useState } from "react";
import "./Header.css";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";

function Header() {
  const [authBtn, setAuthBtn] = useState("Login");

  const loginHandler = () => {
    authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={loginHandler}>
            {authBtn}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
