
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./NavbarWithIcons.stories";
    
    it("renders a div with DryNavbarWithIcons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryNavbarWithIcons = div.querySelector(
        '.dry-navbarWithIcons:nth-child(1)'
      );
      expect(dryNavbarWithIcons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      