import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Tumble.stories";

it("renders a div with DryTumble", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTumble = div.querySelector(".dry-tumble:nth-child(1)");
  expect(dryTumble).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
