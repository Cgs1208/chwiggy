import { render, screen } from "@testing-library/react";

import Contact from "../pages/Contact";

describe("contact us page should have --> ", () => {
  test("header", () => {
    //arrange (contact page will be render to jsdom)
    render(<Contact />);

    //act (we use screen to access elements in the redered component)
    //const heading = screen.getByRole("heading");
    const heading = screen.getByText("Contact Us", { exact: "false" });

    //arrange
    expect(heading).toBeInTheDocument();
  });

  test("button ", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("2 input boxes", () => {
    render(<Contact />);

    //RHS returs ReactHTMLElements/jsx/ virtual dom nodes
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});

//test and it are both same
