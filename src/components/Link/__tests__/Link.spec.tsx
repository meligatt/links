import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Link } from "../Link";

describe("Link", () => {
  test("renders link with text", () => {
    const { getByText } = render(
      <Link href="https://meligatt.github.io/melissa-gattoni-frontend-dev.jpeg">
        mocked link text
      </Link>
    );
    expect(getByText("mocked link text")).toBeInTheDocument();
  });
});
