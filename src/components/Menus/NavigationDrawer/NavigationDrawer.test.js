
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./NavigationDrawer.stories";
    
    it("renders a div with DryNavigationDrawer", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryNavigationDrawer = div.querySelector(
        '.dry-navigationDrawer:nth-child(1)'
      );
      expect(dryNavigationDrawer).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      