
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./HoverDropdowns.stories";
    
    it("renders a div with DryHoverDropdowns", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHoverDropdowns = div.querySelector(
        '.dry-hoverDropdowns:nth-child(1)'
      );
      expect(dryHoverDropdowns).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      