import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Lightbox.stories";

it("renders a div with DryLightbox", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryLightbox = div.querySelector(".dry-lightbox:nth-child(1)");
  expect(dryLightbox).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
