import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ChangeBgonScroll.stories";

it("renders a div with DryChangeBgonScroll", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryChangeBgonScroll = div.querySelector(
    ".dry-changeBgonScroll:nth-child(1)"
  );
  expect(dryChangeBgonScroll).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
