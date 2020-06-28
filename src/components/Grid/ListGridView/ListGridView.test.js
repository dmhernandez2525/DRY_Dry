import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ListGridView.stories";

it("renders a div with DryListGridView", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryListGridView = div.querySelector(".dry-listGridView:nth-child(1)");
  expect(dryListGridView).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
