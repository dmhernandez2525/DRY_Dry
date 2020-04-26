import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./DropdownMenu.stories";

it("renders a div with DryDropdownMenu", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryDropdownMenu = div.querySelector(".dry-dropdownMenu:nth-child(1)");
  expect(dryDropdownMenu).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
