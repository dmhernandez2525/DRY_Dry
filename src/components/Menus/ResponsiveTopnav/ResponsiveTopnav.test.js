
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ResponsiveTopnav.stories";
    
    it("renders a div with DryResponsiveTopnav", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryResponsiveTopnav = div.querySelector(
        '.dry-responsiveTopnav:nth-child(1)'
      );
      expect(dryResponsiveTopnav).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      