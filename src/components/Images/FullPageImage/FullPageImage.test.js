import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FullPageImage.stories";

it("renders a div with DryFullPageImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFullPageImage = div.querySelector(".dry-fullPageImage:nth-child(1)");
  expect(dryFullPageImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
