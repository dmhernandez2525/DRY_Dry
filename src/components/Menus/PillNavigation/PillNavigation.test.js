
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./PillNavigation.stories";
    
    it("renders a div with DryPillNavigation", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryPillNavigation = div.querySelector(
        '.dry-pillNavigation:nth-child(1)'
      );
      expect(dryPillNavigation).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      