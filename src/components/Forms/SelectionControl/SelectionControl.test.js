import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SelectionControl.stories";

it("renders a div with DrySelectionControl", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySelectionControl = div.querySelector(
    ".dry-selectionControl:nth-child(1)"
  );
  expect(drySelectionControl).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
