import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ModalImages.stories";

it("renders a div with DryModalImages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryModalImages = div.querySelector(".dry-modalImages:nth-child(1)");
  expect(dryModalImages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
