import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Link } from "../Link";

describe("Link", () => {
  test("renders image with default props", () => {
    const { getByText } = render(
      <Link
        href="https://meligatt.github.io/melissa-gattoni-frontend-dev.jpeg"
        text="mocked text"
      />
    );
    expect(getByText("mocked text")).toMatchSnapshot();
  });
});
