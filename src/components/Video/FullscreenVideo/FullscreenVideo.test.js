import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FullscreenVideo.stories";

it("renders a div with DryFullscreenVideo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFullscreenVideo = div.querySelector(
    ".dry-fullscreenVideo:nth-child(1)"
  );
  expect(dryFullscreenVideo).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
