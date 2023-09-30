import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render header component with login button", () => {
  render(
    <BrowserRouter>
      {" "}
      {/*this is provided because we are using Link in header.js*/}
      <Provider store={appStore}>
        {/*provider is wrapped because we are using redux in header.js*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" }); //if multiple buttons and we want one with speific name

  //const loginButton = screen.getByText("Login"); //better to not use this

  expect(loginButton).toBeInTheDocument();
});

test("should render header component with cart item 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); //regex given instead of string
  //const loginButton = screen.getByRole("button", { name: "Login" }); //if multiple buttons and i want one with speific name

  //const loginButton = screen.getByText("Login"); //better to not use this

  expect(cartItems).toBeInTheDocument();
});

test("should change login button to logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
