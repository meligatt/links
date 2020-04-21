import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PageHeader } from "../PageHeader";

describe("PageHeader", () => {
  test("renders a username", () => {
    const { getByText } = render(<PageHeader userName="mockedusername" />);
    expect(getByText("@mockedusername")).toBeInTheDocument();
  });

  test("renders children passed", () => {
    const { getByText } = render(
      <PageHeader userName="mockedusername">
        <div>item 1</div>
      </PageHeader>
    );
    expect(getByText("item 1")).toBeInTheDocument();
  });
});
