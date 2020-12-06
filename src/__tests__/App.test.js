import React from "react";
import "regenerator-runtime";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders app component", () => {
    const { getByTestId } = render(<App />);
    const linkElement = getByTestId("app");
    expect(linkElement).toBeInTheDocument();
  });
});
