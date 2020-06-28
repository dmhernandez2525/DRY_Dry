import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FilterTable.stories";

it("renders a div with DryFilterTable", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFilterTable = div.querySelector(".dry-filterTable:nth-child(1)");
  expect(dryFilterTable).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
