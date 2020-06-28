import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ResponsiveImageGrid.stories";

it("renders a div with DryResponsiveImageGrid", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryResponsiveImageGrid = div.querySelector(
    ".dry-responsiveImageGrid:nth-child(1)"
  );
  expect(dryResponsiveImageGrid).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
