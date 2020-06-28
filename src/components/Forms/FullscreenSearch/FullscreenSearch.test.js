import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FullscreenSearch.stories";

it("renders a div with DryFullscreenSearch", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFullscreenSearch = div.querySelector(
    ".dry-fullscreenSearch:nth-child(1)"
  );
  expect(dryFullscreenSearch).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
