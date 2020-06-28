import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Thumbnails.stories";

it("renders a div with DryThumbnails", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryThumbnails = div.querySelector(".dry-thumbnails:nth-child(1)");
  expect(dryThumbnails).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
