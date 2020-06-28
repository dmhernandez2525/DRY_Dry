
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Header.stories";
    
    it("renders a div with DryHeader", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHeader = div.querySelector(
        '.dry-header:nth-child(1)'
      );
      expect(dryHeader).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      