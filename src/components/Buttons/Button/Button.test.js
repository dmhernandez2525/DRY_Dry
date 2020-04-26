import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Button.stories";

it("renders a div with DryButton", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryButton = div.querySelector(".dry-button:nth-child(1)");
  expect(dryButton).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
