import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Users from "../pages/Users";
import { matchers } from "@emotion/jest";
import { act } from "react-dom/test-utils";

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

describe("Responsive user list", () => {
  it("should display 1 column if screen size is less than 768px", () => {
    window = Object.assign(window, { innerWidth: 700 });

    let component: RenderResult<
      typeof import("/Users/lehuyentran/integrify-test/node_modules/@testing-library/dom/types/queries"),
      HTMLElement
    >;
    act(() => {
      component = render(<Users />);
    });

    const allItems = component.getByTestId("test-all-users");

    expect(allItems).toHaveStyleRule("grid-template-columns", "repeat(1, 1fr)");
  });

  it("should display 2 columns if screen size is less than 1280px and more than 768px", () => {
    window = Object.assign(window, { innerWidth: 1000 });

    let component: RenderResult<
      typeof import("/Users/lehuyentran/integrify-test/node_modules/@testing-library/dom/types/queries"),
      HTMLElement
    >;
    act(() => {
      component = render(<Users />);
    });

    const allItems = component.getByTestId("test-all-users");

    expect(allItems).toHaveStyleRule("grid-template-columns", "repeat(2, 1fr)");
  });

  it("should display 3 columns if screen size is more than 1280px", () => {
    window = Object.assign(window, { innerWidth: 1300 });

    let component: RenderResult<
      typeof import("/Users/lehuyentran/integrify-test/node_modules/@testing-library/dom/types/queries"),
      HTMLElement
    >;
    act(() => {
      component = render(<Users />);
    });

    const allItems = component.getByTestId("test-all-users");

    expect(allItems).toHaveStyleRule("grid-template-columns", "repeat(3, 1fr)");
  });
});
