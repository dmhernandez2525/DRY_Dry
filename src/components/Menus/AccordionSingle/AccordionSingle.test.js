import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./AccordionSingle.stories";

it("renders a div with DryAccordionSingle", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAccordionSingle = div.querySelector(
    ".dry-accordionSingle:nth-child(1)"
  );
  expect(dryAccordionSingle).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
