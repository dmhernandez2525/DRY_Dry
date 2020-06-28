
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./IconButtons.stories";
    
    it("renders a div with DryIconButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryIconButtons = div.querySelector(
        '.dry-iconButtons:nth-child(1)'
      );
      expect(dryIconButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      