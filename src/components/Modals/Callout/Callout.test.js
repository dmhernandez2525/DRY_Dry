import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Callout.stories";

it("renders a div with DryCallout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCallout = div.querySelector(".dry-callout:nth-child(1)");
  expect(dryCallout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
