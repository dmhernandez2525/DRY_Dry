import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Password.stories";

it("renders a div with DryPassword", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPassword = div.querySelector(".dry-password:nth-child(1)");
  expect(dryPassword).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
