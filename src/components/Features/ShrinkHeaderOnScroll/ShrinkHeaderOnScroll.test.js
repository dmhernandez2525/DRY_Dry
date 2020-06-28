
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ShrinkHeaderOnScroll.stories";
    
    it("renders a div with DryShrinkHeaderOnScroll", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryShrinkHeaderOnScroll = div.querySelector(
        '.dry-shrinkHeaderOnScroll:nth-child(1)'
      );
      expect(dryShrinkHeaderOnScroll).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      