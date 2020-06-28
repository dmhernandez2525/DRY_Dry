import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./ContactForm.stories";

it("renders a div with DryContactForm", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryContactForm = div.querySelector(".dry-contactForm:nth-child(1)");
  expect(dryContactForm).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
