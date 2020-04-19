import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Avatar } from "./Avatar";

test("renders", () => {
  const { getByText } = render(<Avatar />);
  expect(getByText("@obiwan")).toBeInTheDocument();
});
