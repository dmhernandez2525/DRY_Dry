import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CircularIndicator.stories";

it("renders a div with DryCircularIndicator", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCircularIndicator = div.querySelector(
    ".dry-circularIndicator:nth-child(1)"
  );
  expect(dryCircularIndicator).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
