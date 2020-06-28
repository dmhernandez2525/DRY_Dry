
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ResponsiveBottomNav.stories";
    
    it("renders a div with DryResponsiveBottomNav", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryResponsiveBottomNav = div.querySelector(
        '.dry-responsiveBottomNav:nth-child(1)'
      );
      expect(dryResponsiveBottomNav).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      