import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Header1.stories";

it("renders a div with DryHeader1", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryHeader1 = div.querySelector(".dry-header1:nth-child(1)");
  expect(dryHeader1).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
