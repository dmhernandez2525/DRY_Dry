import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ZigZagLayout.stories";

it("renders a div with DryZigZagLayout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryZigZagLayout = div.querySelector(".dry-zigZagLayout:nth-child(1)");
  expect(dryZigZagLayout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
