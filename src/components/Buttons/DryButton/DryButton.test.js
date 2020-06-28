
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./DryButton.stories";
    
    it("renders a div with DryDryButton", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryDryButton = div.querySelector(
        '.dry-dryButton:nth-child(1)'
      );
      expect(dryDryButton).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      