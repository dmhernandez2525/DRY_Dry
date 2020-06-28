
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Footer.stories";
    
    it("renders a div with DryFooter", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFooter = div.querySelector(
        '.dry-footer:nth-child(1)'
      );
      expect(dryFooter).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      