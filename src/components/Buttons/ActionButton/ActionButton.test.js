
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ActionButton.stories";
    
    it("renders a div with DryActionButton", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryActionButton = div.querySelector(
        '.dry-actionButton:nth-child(1)'
      );
      expect(dryActionButton).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      