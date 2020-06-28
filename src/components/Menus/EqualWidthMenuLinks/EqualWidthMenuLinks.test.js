import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./EqualWidthMenuLinks.stories";

it("renders a div with DryEqualWidthMenuLinks", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryEqualWidthMenuLinks = div.querySelector(
    ".dry-equalWidthMenuLinks:nth-child(1)"
  );
  expect(dryEqualWidthMenuLinks).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
