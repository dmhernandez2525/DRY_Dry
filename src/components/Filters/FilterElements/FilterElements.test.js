import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FilterElements.stories";

it("renders a div with DryFilterElements", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFilterElements = div.querySelector(
    ".dry-filterElements:nth-child(1)"
  );
  expect(dryFilterElements).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
