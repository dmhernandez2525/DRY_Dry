import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ChatMessages.stories";

it("renders a div with DryChatMessages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryChatMessages = div.querySelector(".dry-chatMessages:nth-child(1)");
  expect(dryChatMessages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
