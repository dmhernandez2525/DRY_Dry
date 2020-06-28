import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageOverlayTitle.stories";

it("renders a div with DryImageOverlayTitle", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageOverlayTitle = div.querySelector(
    ".dry-imageOverlayTitle:nth-child(1)"
  );
  expect(dryImageOverlayTitle).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
