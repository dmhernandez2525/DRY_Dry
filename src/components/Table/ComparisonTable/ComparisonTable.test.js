import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ComparisonTable.stories";

it("renders a div with DryComparisonTable", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryComparisonTable = div.querySelector(
    ".dry-comparisonTable:nth-child(1)"
  );
  expect(dryComparisonTable).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
