import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./StickyImage.stories";

it("renders a div with DryStickyImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryStickyImage = div.querySelector(".dry-stickyImage:nth-child(1)");
  expect(dryStickyImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
