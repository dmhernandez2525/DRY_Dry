import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./AlertDialog.stories";

it("renders a div with DryAlertDialog", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAlertDialog = div.querySelector(".dry-alertDialog:nth-child(1)");
  expect(dryAlertDialog).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
