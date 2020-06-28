import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./DropdowninTopnav.stories";

it("renders a div with DryDropdowninTopnav", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryDropdowninTopnav = div.querySelector(
    ".dry-dropdowninTopnav:nth-child(1)"
  );
  expect(dryDropdowninTopnav).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
