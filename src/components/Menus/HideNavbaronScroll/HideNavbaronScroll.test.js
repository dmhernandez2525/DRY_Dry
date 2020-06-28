import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./HideNavbaronScroll.stories";

it("renders a div with DryHideNavbaronScroll", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryHideNavbaronScroll = div.querySelector(
    ".dry-hideNavbaronScroll:nth-child(1)"
  );
  expect(dryHideNavbaronScroll).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
