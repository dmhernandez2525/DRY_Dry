import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TogglePasswordVisibility.stories";

it("renders a div with DryTogglePasswordVisibility", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTogglePasswordVisibility = div.querySelector(
    ".dry-togglePasswordVisibility:nth-child(1)"
  );
  expect(dryTogglePasswordVisibility).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
