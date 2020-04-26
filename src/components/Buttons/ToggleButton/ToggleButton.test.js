import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ToggleButton.stories";

it("renders a div with DryToggleButton", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryToggleButton = div.querySelector(".dry-toggleButton:nth-child(1)");
  expect(dryToggleButton).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
