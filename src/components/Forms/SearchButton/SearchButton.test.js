import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SearchButton.stories";

it("renders a div with DrySearchButton", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySearchButton = div.querySelector(".dry-searchButton:nth-child(1)");
  expect(drySearchButton).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
