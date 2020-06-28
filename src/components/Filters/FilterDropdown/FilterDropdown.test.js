import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FilterDropdown.stories";

it("renders a div with DryFilterDropdown", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFilterDropdown = div.querySelector(
    ".dry-filterDropdown:nth-child(1)"
  );
  expect(dryFilterDropdown).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
