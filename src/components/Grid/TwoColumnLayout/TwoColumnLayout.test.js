import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TwoColumnLayout.stories";

it("renders a div with DryTwoColumnLayout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTwoColumnLayout = div.querySelector(
    ".dry-twoColumnLayout:nth-child(1)"
  );
  expect(dryTwoColumnLayout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
