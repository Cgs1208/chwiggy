import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

test("should render Restaurant Card data with props", () => {
  render(<RestaurantCard resList={MOCK_DATA} />);

  const resName = screen.getByText("The Bowl Company");

  expect(resName).toBeInTheDocument();
});
