import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./PortfolioGallery.stories";

it("renders a div with DryPortfolioGallery", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPortfolioGallery = div.querySelector(
    ".dry-portfolioGallery:nth-child(1)"
  );
  expect(dryPortfolioGallery).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
