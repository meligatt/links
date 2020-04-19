import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PageFooter } from "./PageFooter";

test("renders", () => {
  const { container, getByText } = render(
    <PageFooter>
      <div>item 1</div>
    </PageFooter>
  );
  expect(getByText("footer goes here...")).toBeInTheDocument();
  expect(container.children.length).toBe(1);
});
