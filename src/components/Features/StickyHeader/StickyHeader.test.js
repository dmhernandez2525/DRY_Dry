
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./StickyHeader.stories";
    
    it("renders a div with DryStickyHeader", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryStickyHeader = div.querySelector(
        '.dry-stickyHeader:nth-child(1)'
      );
      expect(dryStickyHeader).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      