
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./TabHeaders.stories";
    
    it("renders a div with DryTabHeaders", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTabHeaders = div.querySelector(
        '.dry-tabHeaders:nth-child(1)'
      );
      expect(dryTabHeaders).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      