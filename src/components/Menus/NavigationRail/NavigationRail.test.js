import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./NavigationRail.stories";

it("renders a div with DryNavigationRail", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryNavigationRail = div.querySelector(
    ".dry-navigationRail:nth-child(1)"
  );
  expect(dryNavigationRail).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
