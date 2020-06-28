import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CenterImages.stories";

it("renders a div with DryCenterImages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCenterImages = div.querySelector(".dry-centerImages:nth-child(1)");
  expect(dryCenterImages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
