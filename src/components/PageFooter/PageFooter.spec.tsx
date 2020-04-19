import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PageFooter } from "./PageFooter";

describe("PageFooter", () => {
  test("renders logo", () => {
    const { container, getByAltText } = render(<PageFooter />);
    expect(getByAltText("LinkTree")).toBeInTheDocument();
    expect(container.children.length).toBe(1);
  });

  test("renders children passed", () => {
    const { getByText, getByAltText } = render(
      <PageFooter>
        <div>test</div>
      </PageFooter>
    );
    expect(getByText("test")).toBeInTheDocument();
    expect(getByAltText("LinkTree")).toBeInTheDocument();
  });
});
