
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./HoverSidenavButtons.stories";
    
    it("renders a div with DryHoverSidenavButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHoverSidenavButtons = div.querySelector(
        '.dry-hoverSidenavButtons:nth-child(1)'
      );
      expect(dryHoverSidenavButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      