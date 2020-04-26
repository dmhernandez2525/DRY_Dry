import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Accordion.stories";

it("renders a div with DryAccordion", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAccordion = div.querySelector(".dry-accordion:nth-child(1)");
  expect(dryAccordion).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
