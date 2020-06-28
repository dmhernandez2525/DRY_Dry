import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SortTable.stories";

it("renders a div with DrySortTable", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySortTable = div.querySelector(".dry-sortTable:nth-child(1)");
  expect(drySortTable).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
