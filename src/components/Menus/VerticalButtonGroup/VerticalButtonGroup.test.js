import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./VerticalButtonGroup.stories";

it("renders a div with DryVerticalButtonGroup", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryVerticalButtonGroup = div.querySelector(
    ".dry-verticalButtonGroup:nth-child(1)"
  );
  expect(dryVerticalButtonGroup).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
