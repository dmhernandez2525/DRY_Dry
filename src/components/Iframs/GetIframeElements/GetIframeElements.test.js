import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./GetIframeElements.stories";

it("renders a div with DryGetIframeElements", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryGetIframeElements = div.querySelector(
    ".dry-getIframeElements:nth-child(1)"
  );
  expect(dryGetIframeElements).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
