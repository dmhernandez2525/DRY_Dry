import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Menu.stories";

it("renders a div with DryMenu", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryMenu = div.querySelector(".dry-menu:nth-child(1)");
  expect(dryMenu).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
