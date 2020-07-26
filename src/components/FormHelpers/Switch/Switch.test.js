import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Switch.stories";

it("renders a div with DrySwitch", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySwitch = div.querySelector(".dry-switch:nth-child(1)");
  expect(drySwitch).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
