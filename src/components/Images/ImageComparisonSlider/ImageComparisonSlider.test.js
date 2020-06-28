import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageComparisonSlider.stories";

it("renders a div with DryImageComparisonSlider", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageComparisonSlider = div.querySelector(
    ".dry-imageComparisonSlider:nth-child(1)"
  );
  expect(dryImageComparisonSlider).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
