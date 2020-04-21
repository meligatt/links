import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { IconButton } from "../IconButton";

describe("IconButton", () => {
  test("renders IconButton with children", () => {
    const onClickSpy = jest.fn();
    const { getByText } = render(
      <IconButton onClick={onClickSpy}>mocked IconButton</IconButton>
    );
    const button = getByText("mocked IconButton");
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
