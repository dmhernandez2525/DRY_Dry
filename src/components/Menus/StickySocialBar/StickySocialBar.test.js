import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./StickySocialBar.stories";

it("renders a div with DryStickySocialBar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryStickySocialBar = div.querySelector(
    ".dry-stickySocialBar:nth-child(1)"
  );
  expect(dryStickySocialBar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
