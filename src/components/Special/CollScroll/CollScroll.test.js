
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./CollScroll.stories";
    
    it("renders a div with DryCollScroll", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCollScroll = div.querySelector(
        '.dry-collScroll:nth-child(1)'
      );
      expect(dryCollScroll).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      