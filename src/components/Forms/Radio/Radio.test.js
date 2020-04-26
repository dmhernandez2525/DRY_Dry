import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Radio.stories";

it("renders a div with DryRadio", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryRadio = div.querySelector(".dry-radio:nth-child(1)");
  expect(dryRadio).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
