
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Headers1.stories";
    
    it("renders a div with DryHeaders1", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHeaders1 = div.querySelector(
        '.dry-headers1:nth-child(1)'
      );
      expect(dryHeaders1).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      