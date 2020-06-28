import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ClearInputField.stories";

it("renders a div with DryClearInputField", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryClearInputField = div.querySelector(
    ".dry-clearInputField:nth-child(1)"
  );
  expect(dryClearInputField).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
