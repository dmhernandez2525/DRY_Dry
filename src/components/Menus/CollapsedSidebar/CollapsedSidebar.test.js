
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./CollapsedSidebar.stories";
    
    it("renders a div with DryCollapsedSidebar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCollapsedSidebar = div.querySelector(
        '.dry-collapsedSidebar:nth-child(1)'
      );
      expect(dryCollapsedSidebar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      