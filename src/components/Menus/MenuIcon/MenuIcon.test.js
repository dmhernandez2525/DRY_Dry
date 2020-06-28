
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./MenuIcon.stories";
    
    it("renders a div with DryMenuIcon", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryMenuIcon = div.querySelector(
        '.dry-menuIcon:nth-child(1)'
      );
      expect(dryMenuIcon).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      