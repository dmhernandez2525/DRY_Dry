import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Card.stories";

it("renders a div with DryCard", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryCard = div.querySelector(".dry-card:nth-child(1)");
  expect(dryCard).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
