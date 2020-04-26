import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SideSheet.stories";

it("renders a div with DrySideSheet", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySideSheet = div.querySelector(".dry-sideSheet:nth-child(1)");
  expect(drySideSheet).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
