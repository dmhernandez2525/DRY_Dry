import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./MultipleStepForm.stories";

it("renders a div with DryMultipleStepForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryMultipleStepForm = div.querySelector(
    ".dry-multipleStepForm:nth-child(1)"
  );
  expect(dryMultipleStepForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
