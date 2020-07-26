import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ClosableListItems.stories";

it("renders a div with DryClosableListItems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryClosableListItems = div.querySelector(
    ".dry-closableListItems:nth-child(1)"
  );
  expect(dryClosableListItems).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
