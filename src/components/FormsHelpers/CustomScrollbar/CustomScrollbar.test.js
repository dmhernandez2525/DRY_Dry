import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CustomScrollbar.stories";

it("renders a div with DryCustomScrollbar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCustomScrollbar = div.querySelector(
    ".dry-customScrollbar:nth-child(1)"
  );
  expect(dryCustomScrollbar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
