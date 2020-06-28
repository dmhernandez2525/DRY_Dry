import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FormonImage.stories";

it("renders a div with DryFormonImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFormonImage = div.querySelector(".dry-formonImage:nth-child(1)");
  expect(dryFormonImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
