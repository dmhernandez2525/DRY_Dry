import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./SpotlightGallery.stories";

it("renders a div with DrySpotlightGallery", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const drySpotlightGallery = div.querySelector(
    ".dry-spotlightGallery:nth-child(1)"
  );
  expect(drySpotlightGallery).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
