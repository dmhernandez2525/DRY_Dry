
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ResponsiveSidebar.stories";
    
    it("renders a div with DryResponsiveSidebar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryResponsiveSidebar = div.querySelector(
        '.dry-responsiveSidebar:nth-child(1)'
      );
      expect(dryResponsiveSidebar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      