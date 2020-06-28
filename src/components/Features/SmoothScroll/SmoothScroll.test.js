
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SmoothScroll.stories";
    
    it("renders a div with DrySmoothScroll", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySmoothScroll = div.querySelector(
        '.dry-smoothScroll:nth-child(1)'
      );
      expect(drySmoothScroll).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      