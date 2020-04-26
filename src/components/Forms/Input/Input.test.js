import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Input.stories";

it("renders a div with DryInput", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryInput = div.querySelector(".dry-input:nth-child(1)");
  expect(dryInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
