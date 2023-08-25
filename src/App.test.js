import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// @TODO: add more tests

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Roll Dice/i);
  expect(buttonElement).toBeInTheDocument();
});
