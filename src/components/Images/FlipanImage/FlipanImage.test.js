import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./FlipanImage.stories";

it("renders a div with DryFlipanImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryFlipanImage = div.querySelector(".dry-flipanImage:nth-child(1)");
  expect(dryFlipanImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
