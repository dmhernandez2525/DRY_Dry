
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./PillButtons.stories";
    
    it("renders a div with DryPillButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryPillButtons = div.querySelector(
        '.dry-pillButtons:nth-child(1)'
      );
      expect(dryPillButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      