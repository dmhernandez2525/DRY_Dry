import React from "react";
import ReactDOM from "react-dom";
import { Default } from "./MeettheTeam.stories";

it("renders a div with DryMeettheTeam", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Default />, div);

  // We expect to display the base component with the name inside a div
  const dryMeettheTeam = div.querySelector(".dry-meettheTeam:nth-child(1)");
  expect(dryMeettheTeam).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
