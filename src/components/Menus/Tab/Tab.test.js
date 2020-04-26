import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Tab.stories";

it("renders a div with DryTab", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTab = div.querySelector(".dry-tab:nth-child(1)");
  expect(dryTab).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
