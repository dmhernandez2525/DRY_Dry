import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ResponsiveForm.stories";

it("renders a div with DryResponsiveForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryResponsiveForm = div.querySelector(
    ".dry-responsiveForm:nth-child(1)"
  );
  expect(dryResponsiveForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
