import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CustomSelect.stories";

it("renders a div with DryCustomSelect", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCustomSelect = div.querySelector(".dry-customSelect:nth-child(1)");
  expect(dryCustomSelect).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
