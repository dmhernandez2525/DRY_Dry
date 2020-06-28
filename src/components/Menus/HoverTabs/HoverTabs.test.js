
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./HoverTabs.stories";
    
    it("renders a div with DryHoverTabs", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHoverTabs = div.querySelector(
        '.dry-hoverTabs:nth-child(1)'
      );
      expect(dryHoverTabs).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      