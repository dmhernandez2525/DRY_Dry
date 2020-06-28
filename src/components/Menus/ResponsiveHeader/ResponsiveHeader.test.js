
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ResponsiveHeader.stories";
    
    it("renders a div with DryResponsiveHeader", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryResponsiveHeader = div.querySelector(
        '.dry-responsiveHeader:nth-child(1)'
      );
      expect(dryResponsiveHeader).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      