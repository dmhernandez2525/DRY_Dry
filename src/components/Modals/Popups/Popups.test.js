import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Popups.stories";

it("renders a div with DryPopups", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPopups = div.querySelector(".dry-popups:nth-child(1)");
  expect(dryPopups).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
