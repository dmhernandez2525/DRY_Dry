import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ExpandingGrid.stories";

it("renders a div with DryExpandingGrid", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryExpandingGrid = div.querySelector(".dry-expandingGrid:nth-child(1)");
  expect(dryExpandingGrid).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
