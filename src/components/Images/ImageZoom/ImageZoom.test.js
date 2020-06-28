import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageZoom.stories";

it("renders a div with DryImageZoom", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageZoom = div.querySelector(".dry-imageZoom:nth-child(1)");
  expect(dryImageZoom).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
