import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./BlogLayout.stories";

it("renders a div with DryBlogLayout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryBlogLayout = div.querySelector(".dry-blogLayout:nth-child(1)");
  expect(dryBlogLayout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
