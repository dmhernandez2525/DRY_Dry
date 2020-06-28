
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./VerticalTabs.stories";
    
    it("renders a div with DryVerticalTabs", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryVerticalTabs = div.querySelector(
        '.dry-verticalTabs:nth-child(1)'
      );
      expect(dryVerticalTabs).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      