import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./DatePicker.stories";

it("renders a div with DryDatePicker", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryDatePicker = div.querySelector(".dry-datePicker:nth-child(1)");
  expect(dryDatePicker).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
