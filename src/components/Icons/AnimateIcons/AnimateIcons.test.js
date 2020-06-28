import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./AnimateIcons.stories";

it("renders a div with DryAnimateIcons", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAnimateIcons = div.querySelector(".dry-animateIcons:nth-child(1)");
  expect(dryAnimateIcons).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
