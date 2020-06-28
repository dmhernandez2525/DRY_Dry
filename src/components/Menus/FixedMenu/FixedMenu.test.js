
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./FixedMenu.stories";
    
    it("renders a div with DryFixedMenu", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFixedMenu = div.querySelector(
        '.dry-fixedMenu:nth-child(1)'
      );
      expect(dryFixedMenu).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      