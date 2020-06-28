
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./TopNavigation.stories";
    
    it("renders a div with DryTopNavigation", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTopNavigation = div.querySelector(
        '.dry-topNavigation:nth-child(1)'
      );
      expect(dryTopNavigation).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      