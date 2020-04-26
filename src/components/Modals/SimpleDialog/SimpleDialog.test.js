import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SimpleDialog.stories";

it("renders a div with DrySimpleDialog", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySimpleDialog = div.querySelector(".dry-simpleDialog:nth-child(1)");
  expect(drySimpleDialog).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
