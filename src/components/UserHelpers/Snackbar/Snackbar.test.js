import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Snackbar.stories";

it("renders a div with DrySnackbar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySnackbar = div.querySelector(".dry-snackbar:nth-child(1)");
  expect(drySnackbar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
