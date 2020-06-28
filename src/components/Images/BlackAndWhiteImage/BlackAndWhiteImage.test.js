import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./BlackAndWhiteImage.stories";

it("renders a div with DryBlackAndWhiteImage", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryBlackAndWhiteImage = div.querySelector(
    ".dry-blackAndWhiteImage:nth-child(1)"
  );
  expect(dryBlackAndWhiteImage).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
