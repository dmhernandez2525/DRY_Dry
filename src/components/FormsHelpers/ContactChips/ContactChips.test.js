import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ContactChips.stories";

it("renders a div with DryContactChips", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryContactChips = div.querySelector(".dry-contactChips:nth-child(1)");
  expect(dryContactChips).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
