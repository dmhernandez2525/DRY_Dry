import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Pagination.stories";

it("renders a div with DryPagination", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryPagination = div.querySelector(".dry-pagination:nth-child(1)");
  expect(dryPagination).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
