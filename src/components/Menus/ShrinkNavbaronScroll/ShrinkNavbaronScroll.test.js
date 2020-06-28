import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ShrinkNavbaronScroll.stories";

it("renders a div with DryShrinkNavbaronScroll", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryShrinkNavbaronScroll = div.querySelector(
    ".dry-shrinkNavbaronScroll:nth-child(1)"
  );
  expect(dryShrinkNavbaronScroll).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
