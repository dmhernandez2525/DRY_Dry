import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SidebarwithIcons.stories";

it("renders a div with DrySidebarwithIcons", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySidebarwithIcons = div.querySelector(
    ".dry-sidebarwithIcons:nth-child(1)"
  );
  expect(drySidebarwithIcons).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
