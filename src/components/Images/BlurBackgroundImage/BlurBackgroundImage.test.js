import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./BlurBackgroundImage.stories";

it("renders a div with DryBlurBackgroundImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryBlurBackgroundImage = div.querySelector(
    ".dry-blurBackgroundImage:nth-child(1)"
  );
  expect(dryBlurBackgroundImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
