import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ConfirmationDialog.stories";

it("renders a div with DryConfirmationDialog", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryConfirmationDialog = div.querySelector(
    ".dry-confirmationDialog:nth-child(1)"
  );
  expect(dryConfirmationDialog).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
