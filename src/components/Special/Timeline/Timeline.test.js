
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Timeline.stories";
    
    it("renders a div with DryTimeline", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTimeline = div.querySelector(
        '.dry-timeline:nth-child(1)'
      );
      expect(dryTimeline).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      