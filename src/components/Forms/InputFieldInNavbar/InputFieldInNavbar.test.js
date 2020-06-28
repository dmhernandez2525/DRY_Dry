import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./InputFieldInNavbar.stories";

it("renders a div with DryInputFieldInNavbar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryInputFieldInNavbar = div.querySelector(
    ".dry-inputFieldInNavbar:nth-child(1)"
  );
  expect(dryInputFieldInNavbar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
