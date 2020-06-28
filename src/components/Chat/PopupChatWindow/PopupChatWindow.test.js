import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./PopupChatWindow.stories";

it("renders a div with DryPopupChatWindow", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPopupChatWindow = div.querySelector(
    ".dry-popupChatWindow:nth-child(1)"
  );
  expect(dryPopupChatWindow).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
