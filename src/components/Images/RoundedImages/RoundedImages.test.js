import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./RoundedImages.stories";

it("renders a div with DryRoundedImages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryRoundedImages = div.querySelector(".dry-roundedImages:nth-child(1)");
  expect(dryRoundedImages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
