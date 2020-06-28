
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Hours.stories";
    
    it("renders a div with DryHours", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHours = div.querySelector(
        '.dry-hours:nth-child(1)'
      );
      expect(dryHours).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      