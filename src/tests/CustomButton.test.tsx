import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import CustomButton from "../components/CustomButton";

describe("Custom button", () => {
  it("should go to user detail page which clicking on More Detail button", () => {
    const component = render(
      <BrowserRouter>
        <CustomButton getId={1} title="More Detail" />
      </BrowserRouter>
    );

    const detailButton = component.getByTestId("test-custom-button");

    fireEvent.click(detailButton);

    expect(window.location.pathname).toEqual("/1");
  });

  it("should go to user list page which clicking on Back To Home button", () => {
    const component = render(
      <BrowserRouter>
        <CustomButton title="Back To Home" />
      </BrowserRouter>
    );

    const backButton = component.getByTestId("test-custom-button");

    fireEvent.click(backButton);

    expect(window.location.pathname).toEqual("/");
  });
});
