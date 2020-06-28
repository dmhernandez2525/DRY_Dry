
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ScrollIndicator.stories";
    
    it("renders a div with DryScrollIndicator", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryScrollIndicator = div.querySelector(
        '.dry-scrollIndicator:nth-child(1)'
      );
      expect(dryScrollIndicator).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      