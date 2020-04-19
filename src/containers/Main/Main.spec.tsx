import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Main } from "./Main";

test("renders", () => {
  const { container, getByText } = render(<Main />);
  expect(getByText("list of links goes here")).toBeInTheDocument();
  expect(container.children.length).toBe(3);
});
