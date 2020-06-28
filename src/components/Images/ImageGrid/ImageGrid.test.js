import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageGrid.stories";

it("renders a div with DryImageGrid", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageGrid = div.querySelector(".dry-imageGrid:nth-child(1)");
  expect(dryImageGrid).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
