import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Select.stories";

it("renders a div with DrySelect", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySelect = div.querySelector(".dry-select:nth-child(1)");
  expect(drySelect).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
