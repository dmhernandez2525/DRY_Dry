import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CollapsedSidepanel.stories";

it("renders a div with DryCollapsedSidepanel", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCollapsedSidepanel = div.querySelector(
    ".dry-collapsedSidepanel:nth-child(1)"
  );
  expect(dryCollapsedSidepanel).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
