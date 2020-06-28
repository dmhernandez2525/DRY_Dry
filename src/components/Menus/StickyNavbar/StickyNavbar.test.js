import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./StickyNavbar.stories";

it("renders a div with DryStickyNavbar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryStickyNavbar = div.querySelector(".dry-stickyNavbar:nth-child(1)");
  expect(dryStickyNavbar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
