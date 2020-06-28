import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./AvatarImages.stories";

it("renders a div with DryAvatarImages", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryAvatarImages = div.querySelector(".dry-avatarImages:nth-child(1)");
  expect(dryAvatarImages).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
