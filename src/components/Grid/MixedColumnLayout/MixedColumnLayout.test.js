import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./MixedColumnLayout.stories";

it("renders a div with DryMixedColumnLayout", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryMixedColumnLayout = div.querySelector(
    ".dry-mixedColumnLayout:nth-child(1)"
  );
  expect(dryMixedColumnLayout).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
