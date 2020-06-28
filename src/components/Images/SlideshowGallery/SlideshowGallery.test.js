import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SlideshowGallery.stories";

it("renders a div with DrySlideshowGallery", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySlideshowGallery = div.querySelector(
    ".dry-slideshowGallery:nth-child(1)"
  );
  expect(drySlideshowGallery).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
