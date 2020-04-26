import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TwoLineList.stories";

it("renders a div with DryTwoLineList", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTwoLineList = div.querySelector(".dry-twoLineList:nth-child(1)");
  expect(dryTwoLineList).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
