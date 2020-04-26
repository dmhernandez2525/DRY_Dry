import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./QuiltedImageList.stories";

it("renders a div with DryQuiltedImageList", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryQuiltedImageList = div.querySelector(
    ".dry-quiltedImageList:nth-child(1)"
  );
  expect(dryQuiltedImageList).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
