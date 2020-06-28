import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FullscreenWindow.stories";

it("renders a div with DryFullscreenWindow", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFullscreenWindow = div.querySelector(
    ".dry-fullscreenWindow:nth-child(1)"
  );
  expect(dryFullscreenWindow).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
