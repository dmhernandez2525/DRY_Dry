import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageOverlayIcon.stories";

it("renders a div with DryImageOverlayIcon", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageOverlayIcon = div.querySelector(
    ".dry-imageOverlayIcon:nth-child(1)"
  );
  expect(dryImageOverlayIcon).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
