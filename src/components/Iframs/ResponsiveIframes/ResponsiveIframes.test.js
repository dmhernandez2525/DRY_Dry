import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ResponsiveIframes.stories";

it("renders a div with DryResponsiveIframes", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryResponsiveIframes = div.querySelector(
    ".dry-responsiveIframes:nth-child(1)"
  );
  expect(dryResponsiveIframes).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
