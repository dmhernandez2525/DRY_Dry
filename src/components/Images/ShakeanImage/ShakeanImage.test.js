import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ShakeanImage.stories";

it("renders a div with DryShakeanImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryShakeanImage = div.querySelector(".dry-shakeanImage:nth-child(1)");
  expect(dryShakeanImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
