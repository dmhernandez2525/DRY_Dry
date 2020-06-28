import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CheckCheckbox.stories";

it("renders a div with DryCheckCheckbox", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCheckCheckbox = div.querySelector(".dry-checkCheckbox:nth-child(1)");
  expect(dryCheckCheckbox).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
