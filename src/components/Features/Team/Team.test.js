import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./Team.stories";

it("renders a div with DryTeam", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryTeam = div.querySelector(".dry-team:nth-child(1)");
  expect(dryTeam).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
