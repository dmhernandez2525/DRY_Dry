import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TriggerButtonOnEnter.stories";

it("renders a div with DryTriggerButtonOnEnter", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTriggerButtonOnEnter = div.querySelector(
    ".dry-triggerButtonOnEnter:nth-child(1)"
  );
  expect(dryTriggerButtonOnEnter).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
