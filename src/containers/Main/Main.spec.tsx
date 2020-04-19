import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Main } from "./Main";

describe("Main", () => {
  test("renders", () => {
    const { container } = render(<Main />);
    expect(container.children.length).toBe(3);
  });
});
