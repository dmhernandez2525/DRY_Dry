import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./DetectCapsLock.stories";

it("renders a div with DryDetectCapsLock", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryDetectCapsLock = div.querySelector(
    ".dry-detectCapsLock:nth-child(1)"
  );
  expect(dryDetectCapsLock).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
