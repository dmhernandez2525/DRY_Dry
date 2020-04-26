import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Label.stories";

it("renders a div with DryLabel", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryLabel = div.querySelector(".dry-label:nth-child(1)");
  expect(dryLabel).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
