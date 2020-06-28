import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ToggleHideShow.stories";

it("renders a div with DryToggleHideShow", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryToggleHideShow = div.querySelector(
    ".dry-toggleHideShow:nth-child(1)"
  );
  expect(dryToggleHideShow).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
