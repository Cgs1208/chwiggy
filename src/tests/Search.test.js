import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("should search Res list", () => {
  test("with burger as input", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => MOCK_DATA,
    });

    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    //screen should load 20 resCards at first render before searching any specific item
    expect(cardsBeforeSearch.length).toBe(20);

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    //screen should load 2 resCards (search and check how many cards we get for burger)
    expect(cardsAfterSearch.length).toBe(2);
  });

  test("with top rated restuarants", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => MOCK_DATA,
    });

    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const topRatedResButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedResButton);

    const topRatedResCards = screen.getAllByTestId("resCard");

    expect(topRatedResCards.length).toBe(18);
  });
});
