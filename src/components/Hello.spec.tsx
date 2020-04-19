import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Hello } from "./Hello";

test("renders a message", () => {
  const { getByText } = render(<Hello name="melissa" />);
  expect(getByText("testing! melissa")).toBeInTheDocument();
});
