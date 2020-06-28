import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ToggleSwitch.stories";

it("renders a div with DryToggleSwitch", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryToggleSwitch = div.querySelector(".dry-toggleSwitch:nth-child(1)");
  expect(dryToggleSwitch).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
