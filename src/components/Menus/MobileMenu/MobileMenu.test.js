import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./MobileMenu.stories";

it("renders a div with DryMobileMenu", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryMobileMenu = div.querySelector(".dry-mobileMenu:nth-child(1)");
  expect(dryMobileMenu).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
