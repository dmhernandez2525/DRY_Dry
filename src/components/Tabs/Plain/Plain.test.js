import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Plain.stories";

it("renders a div with DryPlain", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPlain = div.querySelector(".dry-plain:nth-child(1)");
  expect(dryPlain).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
