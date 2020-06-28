
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./FullPageTabs.stories";
    
    it("renders a div with DryFullPageTabs", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFullPageTabs = div.querySelector(
        '.dry-fullPageTabs:nth-child(1)'
      );
      expect(dryFullPageTabs).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      