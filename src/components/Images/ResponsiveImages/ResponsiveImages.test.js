import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ResponsiveImages.stories";

it("renders a div with DryResponsiveImages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryResponsiveImages = div.querySelector(
    ".dry-responsiveImages:nth-child(1)"
  );
  expect(dryResponsiveImages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
