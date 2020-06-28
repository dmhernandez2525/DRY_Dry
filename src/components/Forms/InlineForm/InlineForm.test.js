import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./InlineForm.stories";

it("renders a div with DryInlineForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryInlineForm = div.querySelector(".dry-inlineForm:nth-child(1)");
  expect(dryInlineForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
