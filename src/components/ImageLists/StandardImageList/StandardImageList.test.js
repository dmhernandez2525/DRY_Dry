import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./StandardImageList.stories";

it("renders a div with DryStandardImageList", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryStandardImageList = div.querySelector(
    ".dry-standardImageList:nth-child(1)"
  );
  expect(dryStandardImageList).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
