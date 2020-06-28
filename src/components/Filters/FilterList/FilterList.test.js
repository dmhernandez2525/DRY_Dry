import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FilterList.stories";

it("renders a div with DryFilterList", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFilterList = div.querySelector(".dry-filterList:nth-child(1)");
  expect(dryFilterList).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
