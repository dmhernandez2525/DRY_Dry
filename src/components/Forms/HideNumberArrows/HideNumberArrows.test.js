import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./HideNumberArrows.stories";

it("renders a div with DryHideNumberArrows", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryHideNumberArrows = div.querySelector(
    ".dry-hideNumberArrows:nth-child(1)"
  );
  expect(dryHideNumberArrows).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
