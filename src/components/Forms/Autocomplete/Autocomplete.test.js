import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Autocomplete.stories";

it("renders a div with DryAutocomplete", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAutocomplete = div.querySelector(".dry-autocomplete:nth-child(1)");
  expect(dryAutocomplete).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
