import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./RangeSliders.stories";

it("renders a div with DryRangeSliders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryRangeSliders = div.querySelector(".dry-rangeSliders:nth-child(1)");
  expect(dryRangeSliders).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
