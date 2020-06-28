import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ZebraStripedTable.stories";

it("renders a div with DryZebraStripedTable", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryZebraStripedTable = div.querySelector(
    ".dry-zebraStripedTable:nth-child(1)"
  );
  expect(dryZebraStripedTable).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
