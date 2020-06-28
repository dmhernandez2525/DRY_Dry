import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageOverlayFade.stories";

it("renders a div with DryImageOverlayFade", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageOverlayFade = div.querySelector(
    ".dry-imageOverlayFade:nth-child(1)"
  );
  expect(dryImageOverlayFade).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
