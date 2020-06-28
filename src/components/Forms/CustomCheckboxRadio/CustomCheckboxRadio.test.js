import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./CustomCheckboxRadio.stories";

it("renders a div with DryCustomCheckboxRadio", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCustomCheckboxRadio = div.querySelector(
    ".dry-customCheckboxRadio:nth-child(1)"
  );
  expect(dryCustomCheckboxRadio).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
