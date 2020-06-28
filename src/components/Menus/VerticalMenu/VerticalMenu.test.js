
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./VerticalMenu.stories";
    
    it("renders a div with DryVerticalMenu", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryVerticalMenu = div.querySelector(
        '.dry-verticalMenu:nth-child(1)'
      );
      expect(dryVerticalMenu).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      