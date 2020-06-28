import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./StackedForm.stories";

it("renders a div with DryStackedForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryStackedForm = div.querySelector(".dry-stackedForm:nth-child(1)");
  expect(dryStackedForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
