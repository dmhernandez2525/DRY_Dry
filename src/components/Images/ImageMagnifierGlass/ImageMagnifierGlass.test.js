import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageMagnifierGlass.stories";

it("renders a div with DryImageMagnifierGlass", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageMagnifierGlass = div.querySelector(
    ".dry-imageMagnifierGlass:nth-child(1)"
  );
  expect(dryImageMagnifierGlass).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
