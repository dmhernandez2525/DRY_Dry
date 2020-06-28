import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TurnOffSpellCheck.stories";

it("renders a div with DryTurnOffSpellCheck", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTurnOffSpellCheck = div.querySelector(
    ".dry-turnOffSpellCheck:nth-child(1)"
  );
  expect(dryTurnOffSpellCheck).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
