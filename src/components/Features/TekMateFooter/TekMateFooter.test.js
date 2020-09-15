import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TekMateFooter.stories";

it("renders a div with DryTekMateFooter", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTekMateFooter = div.querySelector(".dry-tekMateFooter:nth-child(1)");
  expect(dryTekMateFooter).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
