import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./LoginFormInNavbar.stories";

it("renders a div with DryLoginFormInNavbar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryLoginFormInNavbar = div.querySelector(
    ".dry-loginFormInNavbar:nth-child(1)"
  );
  expect(dryLoginFormInNavbar).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
