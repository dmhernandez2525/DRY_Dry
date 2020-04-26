import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Checkbox.stories";

it("renders a div with DryCheckbox", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCheckbox = div.querySelector(".dry-checkbox:nth-child(1)");
  expect(dryCheckbox).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
