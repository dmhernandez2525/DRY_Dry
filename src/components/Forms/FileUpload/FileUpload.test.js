import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FileUpload.stories";

it("renders a div with DryFileUpload", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFileUpload = div.querySelector(".dry-fileUpload:nth-child(1)");
  expect(dryFileUpload).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
