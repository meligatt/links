import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PageHeader } from "./PageHeader";

test("renders", () => {
  const { container, getByText } = render(
    <PageHeader>
      <div>item 1</div>
    </PageHeader>
  );
  expect(getByText("header goes here...")).toBeInTheDocument();
  expect(container.children.length).toBe(1);
});
