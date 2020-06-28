import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./OverlayEffect.stories";

it("renders a div with DryOverlayEffect", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryOverlayEffect = div.querySelector(".dry-overlayEffect:nth-child(1)");
  expect(dryOverlayEffect).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
