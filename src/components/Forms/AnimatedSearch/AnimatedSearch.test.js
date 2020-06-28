import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./AnimatedSearch.stories";

it("renders a div with DryAnimatedSearch", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAnimatedSearch = div.querySelector(
    ".dry-animatedSearch:nth-child(1)"
  );
  expect(dryAnimatedSearch).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
