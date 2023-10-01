import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import RestaurantMenu from "../components/RestaurantMenu";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

test("should load retaurant menu component", async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => MOCK_DATA,
  });

  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Peri Peri Chicken (5)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(5);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]); // clicking the first add button out of all the buttons we got in previous line
  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  //5 from before and 2 from 2 times add button clicked
  //(since we are using same ItemList component for both cart and restaurant menu)

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  //2 items from 2 time clicking add button removed so remaining are 5

  expect(
    screen.getByText("Are you not hungry yet ? Add items to cart")
  ).toBeInTheDocument();
});

//try to keep the test cases separate and specific and not nested as above
