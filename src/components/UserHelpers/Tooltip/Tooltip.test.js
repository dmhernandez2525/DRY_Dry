import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Tooltip.stories";

it("renders a div with DryTooltip", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTooltip = div.querySelector(".dry-tooltip:nth-child(1)");
  expect(dryTooltip).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
