
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Banner.stories";
    
    it("renders a div with DryBanner", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryBanner = div.querySelector(
        '.dry-banner:nth-child(1)'
      );
      expect(dryBanner).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      