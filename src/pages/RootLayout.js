import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import UserContext from "../utils/UserContext";

function RootLayout() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //simulate the api call with username and pass for authentication
    const response = { user: "Charan" };
    setUserName(response.user);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
  );
}

export default RootLayout;
