import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Services.stories";

it("renders a div with DryServices", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryServices = div.querySelector(".dry-services:nth-child(1)");
  expect(dryServices).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
