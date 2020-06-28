import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ThreeColumnLayout.stories";

it("renders a div with DryThreeColumnLayout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryThreeColumnLayout = div.querySelector(
    ".dry-threeColumnLayout:nth-child(1)"
  );
  expect(dryThreeColumnLayout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
