import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FileUploadButton.stories";

it("renders a div with DryFileUploadButton", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFileUploadButton = div.querySelector(
    ".dry-fileUploadButton:nth-child(1)"
  );
  expect(dryFileUploadButton).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
