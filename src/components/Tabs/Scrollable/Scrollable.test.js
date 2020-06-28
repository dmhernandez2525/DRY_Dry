import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Scrollable.stories";

it("renders a div with DryScrollable", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryScrollable = div.querySelector(".dry-scrollable:nth-child(1)");
  expect(dryScrollable).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
