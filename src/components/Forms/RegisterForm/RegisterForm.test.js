import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./RegisterForm.stories";

it("renders a div with DryRegisterForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryRegisterForm = div.querySelector(".dry-registerForm:nth-child(1)");
  expect(dryRegisterForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
