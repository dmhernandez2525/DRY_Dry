import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./TekMateContact.stories";

it("renders a div with DryTekMateContact", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTekMateContact = div.querySelector(
    ".dry-tekMateContact:nth-child(1)"
  );
  expect(dryTekMateContact).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
