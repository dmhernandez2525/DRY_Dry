
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./MegaMenu.stories";
    
    it("renders a div with DryMegaMenu", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryMegaMenu = div.querySelector(
        '.dry-megaMenu:nth-child(1)'
      );
      expect(dryMegaMenu).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      