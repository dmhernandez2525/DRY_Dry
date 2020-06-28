import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./PasswordValidation.stories";

it("renders a div with DryPasswordValidation", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPasswordValidation = div.querySelector(
    ".dry-passwordValidation:nth-child(1)"
  );
  expect(dryPasswordValidation).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
