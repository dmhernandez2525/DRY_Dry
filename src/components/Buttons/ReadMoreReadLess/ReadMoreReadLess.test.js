
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ReadMoreReadLess.stories";
    
    it("renders a div with DryReadMoreReadLess", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryReadMoreReadLess = div.querySelector(
        '.dry-readMoreReadLess:nth-child(1)'
      );
      expect(dryReadMoreReadLess).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      