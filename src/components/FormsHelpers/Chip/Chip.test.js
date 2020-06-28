import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Chip.stories";

it("renders a div with DryChip", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryChip = div.querySelector(".dry-chip:nth-child(1)");
  expect(dryChip).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
