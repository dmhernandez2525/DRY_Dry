import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TurnOffAutoComplete.stories";

it("renders a div with DryTurnOffAutoComplete", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTurnOffAutoComplete = div.querySelector(
    ".dry-turnOffAutoComplete:nth-child(1)"
  );
  expect(dryTurnOffAutoComplete).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
