import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ModalBox.stories";

it("renders a div with DryModalBox", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryModalBox = div.querySelector(".dry-modalBox:nth-child(1)");
  expect(dryModalBox).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
