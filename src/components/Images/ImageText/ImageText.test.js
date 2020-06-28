import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ImageText.stories";

it("renders a div with DryImageText", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryImageText = div.querySelector(".dry-imageText:nth-child(1)");
  expect(dryImageText).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
