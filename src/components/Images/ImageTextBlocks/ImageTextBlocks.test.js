import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageTextBlocks.stories";

it("renders a div with DryImageTextBlocks", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageTextBlocks = div.querySelector(
    ".dry-imageTextBlocks:nth-child(1)"
  );
  expect(dryImageTextBlocks).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
