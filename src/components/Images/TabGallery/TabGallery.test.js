import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TabGallery.stories";

it("renders a div with DryTabGallery", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTabGallery = div.querySelector(".dry-tabGallery:nth-child(1)");
  expect(dryTabGallery).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
