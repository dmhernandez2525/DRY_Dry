
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./LinearIndicator.stories";
    
    it("renders a div with DryLinearIndicator", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryLinearIndicator = div.querySelector(
        '.dry-linearIndicator:nth-child(1)'
      );
      expect(dryLinearIndicator).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      