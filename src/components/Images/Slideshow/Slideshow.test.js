import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Slideshow.stories";

it("renders a div with DrySlideshow", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySlideshow = div.querySelector(".dry-slideshow:nth-child(1)");
  expect(drySlideshow).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
