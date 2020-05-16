import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Nav.stories";

it("renders a div with DryNav", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryNav = div.querySelector(".dry-nav:nth-child(1)");
  expect(dryNav).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
