
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./BlockButtons.stories";
    
    it("renders a div with DryBlockButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryBlockButtons = div.querySelector(
        '.dry-blockButtons:nth-child(1)'
      );
      expect(dryBlockButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      