import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./LoginForm.stories";

it("renders a div with DryLoginForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryLoginForm = div.querySelector(".dry-loginForm:nth-child(1)");
  expect(dryLoginForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
