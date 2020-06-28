import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CopyTextToClipboard.stories";

it("renders a div with DryCopyTextToClipboard", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCopyTextToClipboard = div.querySelector(
    ".dry-copyTextToClipboard:nth-child(1)"
  );
  expect(dryCopyTextToClipboard).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
