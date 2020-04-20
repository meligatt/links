import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Avatar } from "../Avatar";

describe("Avatar", () => {
  test("renders image with default props", () => {
    const { container } = render(
      <Avatar src="https://meligatt.github.io/melissa-gattoni-frontend-dev.jpeg" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders image with passed props", () => {
    const { getByAltText } = render(
      <Avatar
        src="https://meligatt.github.io/melissa-gattoni-frontend-dev.jpeg"
        alt="mocked name"
        width={120}
        height={120}
      />
    );
    expect(getByAltText("mocked name")).toBeInTheDocument();
  });
});
