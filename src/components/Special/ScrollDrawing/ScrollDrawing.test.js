
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ScrollDrawing.stories";
    
    it("renders a div with DryScrollDrawing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryScrollDrawing = div.querySelector(
        '.dry-scrollDrawing:nth-child(1)'
      );
      expect(dryScrollDrawing).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      