
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./BottomBorderNavLinks.stories";
    
    it("renders a div with DryBottomBorderNavLinks", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryBottomBorderNavLinks = div.querySelector(
        '.dry-bottomBorderNavLinks:nth-child(1)'
      );
      expect(dryBottomBorderNavLinks).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      