import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Typography.stories";

it("renders a div with DryTypography", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTypography = div.querySelector(".dry-typography:nth-child(1)");
  expect(dryTypography).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
