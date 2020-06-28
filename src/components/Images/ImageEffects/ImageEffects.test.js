import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageEffects.stories";

it("renders a div with DryImageEffects", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageEffects = div.querySelector(".dry-imageEffects:nth-child(1)");
  expect(dryImageEffects).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
