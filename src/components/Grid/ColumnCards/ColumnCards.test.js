import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ColumnCards.stories";

it("renders a div with DryColumnCards", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryColumnCards = div.querySelector(".dry-columnCards:nth-child(1)");
  expect(dryColumnCards).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
