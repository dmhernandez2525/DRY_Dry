import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Divider.stories";

it("renders a div with DryDivider", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryDivider = div.querySelector(".dry-divider:nth-child(1)");
  expect(dryDivider).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
