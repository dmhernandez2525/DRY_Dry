import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CurtainMenu.stories";

it("renders a div with DryCurtainMenu", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCurtainMenu = div.querySelector(".dry-curtainMenu:nth-child(1)");
  expect(dryCurtainMenu).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
