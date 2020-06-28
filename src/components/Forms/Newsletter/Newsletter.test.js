import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Newsletter.stories";

it("renders a div with DryNewsletter", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryNewsletter = div.querySelector(".dry-newsletter:nth-child(1)");
  expect(dryNewsletter).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
