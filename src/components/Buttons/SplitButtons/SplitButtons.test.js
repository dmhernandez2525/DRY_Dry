
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SplitButtons.stories";
    
    it("renders a div with DrySplitButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySplitButtons = div.querySelector(
        '.dry-splitButtons:nth-child(1)'
      );
      expect(drySplitButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      