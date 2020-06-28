import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./BorderAroundImage.stories";

it("renders a div with DryBorderAroundImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryBorderAroundImage = div.querySelector(
    ".dry-borderAroundImage:nth-child(1)"
  );
  expect(dryBorderAroundImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
