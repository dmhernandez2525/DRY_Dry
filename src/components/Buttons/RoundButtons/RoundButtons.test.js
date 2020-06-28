
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./RoundButtons.stories";
    
    it("renders a div with DryRoundButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryRoundButtons = div.querySelector(
        '.dry-roundButtons:nth-child(1)'
      );
      expect(dryRoundButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      