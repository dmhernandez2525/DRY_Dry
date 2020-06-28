import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Wobble.stories";

it("renders a div with DryWobble", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryWobble = div.querySelector(".dry-wobble:nth-child(1)");
  expect(dryWobble).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
