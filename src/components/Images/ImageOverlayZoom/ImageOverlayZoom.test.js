import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageOverlayZoom.stories";

it("renders a div with DryImageOverlayZoom", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageOverlayZoom = div.querySelector(
    ".dry-imageOverlayZoom:nth-child(1)"
  );
  expect(dryImageOverlayZoom).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
