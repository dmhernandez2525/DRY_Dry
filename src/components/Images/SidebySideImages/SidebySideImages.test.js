import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SidebySideImages.stories";

it("renders a div with DrySidebySideImages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySidebySideImages = div.querySelector(
    ".dry-sidebySideImages:nth-child(1)"
  );
  expect(drySidebySideImages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
