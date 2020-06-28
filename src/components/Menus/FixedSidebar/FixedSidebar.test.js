
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./FixedSidebar.stories";
    
    it("renders a div with DryFixedSidebar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFixedSidebar = div.querySelector(
        '.dry-fixedSidebar:nth-child(1)'
      );
      expect(dryFixedSidebar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      