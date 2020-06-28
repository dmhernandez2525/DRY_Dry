import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SortList.stories";

it("renders a div with DrySortList", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySortList = div.querySelector(".dry-sortList:nth-child(1)");
  expect(drySortList).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
