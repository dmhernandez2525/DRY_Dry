import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FormWithIcons.stories";

it("renders a div with DryFormWithIcons", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFormWithIcons = div.querySelector(".dry-formWithIcons:nth-child(1)");
  expect(dryFormWithIcons).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
