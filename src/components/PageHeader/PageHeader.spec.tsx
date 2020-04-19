import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PageHeader } from "./PageHeader";

describe("PageHeader", () => {
  test("renders a username", () => {
    const { container, getByText } = render(
      <PageHeader userName="mocked username" />
    );
    expect(getByText("mocked username")).toBeInTheDocument();
    expect(container.children.length).toBe(1);
  });
  test("renders children passed", () => {
    const { container, getByText } = render(
      <PageHeader>
        <div>item 1</div>
      </PageHeader>
    );
    expect(getByText("item 1")).toBeInTheDocument();
    expect(container.children.length).toBe(1);
  });
});
