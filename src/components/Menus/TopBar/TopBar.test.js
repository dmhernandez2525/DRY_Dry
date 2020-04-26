import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TopBar.stories";

it("renders a div with DryTopBar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTopBar = div.querySelector(".dry-topBar:nth-child(1)");
  expect(dryTopBar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
