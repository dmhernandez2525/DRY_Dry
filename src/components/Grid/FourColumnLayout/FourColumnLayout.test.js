import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FourColumnLayout.stories";

it("renders a div with DryFourColumnLayout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFourColumnLayout = div.querySelector(
    ".dry-fourColumnLayout:nth-child(1)"
  );
  expect(dryFourColumnLayout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
