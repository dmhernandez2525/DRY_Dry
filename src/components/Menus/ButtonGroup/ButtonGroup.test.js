import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ButtonGroup.stories";

it("renders a div with DryButtonGroup", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryButtonGroup = div.querySelector(".dry-buttonGroup:nth-child(1)");
  expect(dryButtonGroup).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
