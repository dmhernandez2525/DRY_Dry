
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./OutlineButtons.stories";
    
    it("renders a div with DryOutlineButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryOutlineButtons = div.querySelector(
        '.dry-outlineButtons:nth-child(1)'
      );
      expect(dryOutlineButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      