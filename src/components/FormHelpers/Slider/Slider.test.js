import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Slider.stories";

it("renders a div with DrySlider", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySlider = div.querySelector(".dry-slider:nth-child(1)");
  expect(drySlider).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
