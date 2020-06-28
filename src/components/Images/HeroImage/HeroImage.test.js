import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./HeroImage.stories";

it("renders a div with DryHeroImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryHeroImage = div.querySelector(".dry-heroImage:nth-child(1)");
  expect(dryHeroImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
