
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SideNavigation.stories";
    
    it("renders a div with DrySideNavigation", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySideNavigation = div.querySelector(
        '.dry-sideNavigation:nth-child(1)'
      );
      expect(drySideNavigation).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      