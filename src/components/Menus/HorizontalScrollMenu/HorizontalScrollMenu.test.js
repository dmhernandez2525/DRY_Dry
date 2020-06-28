
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./HorizontalScrollMenu.stories";
    
    it("renders a div with DryHorizontalScrollMenu", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryHorizontalScrollMenu = div.querySelector(
        '.dry-horizontalScrollMenu:nth-child(1)'
      );
      expect(dryHorizontalScrollMenu).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      