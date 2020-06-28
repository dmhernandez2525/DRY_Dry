import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./PopupForm.stories";

it("renders a div with DryPopupForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPopupForm = div.querySelector(".dry-popupForm:nth-child(1)");
  expect(dryPopupForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
