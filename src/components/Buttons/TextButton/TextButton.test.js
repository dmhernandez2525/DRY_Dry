import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TextButton.stories";

it("renders a div with DryTextButton", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTextButton = div.querySelector(".dry-textButton:nth-child(1)");
  expect(dryTextButton).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
