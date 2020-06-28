
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SearchMenu.stories";
    
    it("renders a div with DrySearchMenu", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySearchMenu = div.querySelector(
        '.dry-searchMenu:nth-child(1)'
      );
      expect(drySearchMenu).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      