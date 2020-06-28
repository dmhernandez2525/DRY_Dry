import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ResponsiveTables.stories";

it("renders a div with DryResponsiveTables", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryResponsiveTables = div.querySelector(
    ".dry-responsiveTables:nth-child(1)"
  );
  expect(dryResponsiveTables).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
