import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./NonProfit.stories";

it("renders a div with DryNonProfit", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryNonProfit = div.querySelector(".dry-nonProfit:nth-child(1)");
  expect(dryNonProfit).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
