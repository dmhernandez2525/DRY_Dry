import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TransparentImageText.stories";

it("renders a div with DryTransparentImageText", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTransparentImageText = div.querySelector(
    ".dry-transparentImageText:nth-child(1)"
  );
  expect(dryTransparentImageText).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
