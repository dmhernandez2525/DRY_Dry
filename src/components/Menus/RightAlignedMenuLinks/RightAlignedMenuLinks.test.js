
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./RightAlignedMenuLinks.stories";
    
    it("renders a div with DryRightAlignedMenuLinks", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryRightAlignedMenuLinks = div.querySelector(
        '.dry-rightAlignedMenuLinks:nth-child(1)'
      );
      expect(dryRightAlignedMenuLinks).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      