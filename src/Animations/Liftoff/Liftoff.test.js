import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Liftoff.stories";

it("renders a div with DryLiftoff", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryLiftoff = div.querySelector(".dry-liftoff:nth-child(1)");
  expect(dryLiftoff).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
