import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./PortfoliowithFiltering.stories";

it("renders a div with DryPortfoliowithFiltering", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPortfoliowithFiltering = div.querySelector(
    ".dry-portfoliowithFiltering:nth-child(1)"
  );
  expect(dryPortfoliowithFiltering).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
