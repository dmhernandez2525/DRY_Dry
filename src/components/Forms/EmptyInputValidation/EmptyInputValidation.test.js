import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./EmptyInputValidation.stories";

it("renders a div with DryEmptyInputValidation", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryEmptyInputValidation = div.querySelector(
    ".dry-emptyInputValidation:nth-child(1)"
  );
  expect(dryEmptyInputValidation).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
